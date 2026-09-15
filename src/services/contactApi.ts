import { apiConfig } from "../config/api";
import type { ContactValidationErrors } from "../contact/contactRequest";
import type { ContactRequest } from "../types/contact";

const contactEndpoint = "/api/contact";
const maximumClientRetryDelaySeconds = 10 * 60;

export type ContactApiFailureKind =
	| "configuration"
	| "validation"
	| "payload-too-large"
	| "unsupported-media-type"
	| "rate-limited"
	| "service-unavailable"
	| "network"
	| "server"
	| "malformed-response";

export interface ContactApiSuccess {
	readonly ok: true;
	readonly message: string;
	readonly tokenMayBeConsumed: true;
}

export interface ContactApiFailure {
	readonly ok: false;
	readonly kind: ContactApiFailureKind;
	readonly tokenMayBeConsumed: boolean;
	readonly fieldErrors?: ContactValidationErrors;
	readonly formErrors?: readonly string[];
	readonly retryAfterSeconds?: number;
}

export type ContactApiResult = ContactApiSuccess | ContactApiFailure;
export type ContactApiClient = (request: ContactRequest) => Promise<ContactApiResult>;

export interface ContactApiClientOptions {
	readonly baseUrl?: string | null;
	readonly fetchImplementation?: typeof fetch;
	readonly now?: () => number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

async function readJson(response: Response): Promise<unknown> {
	try {
		return await response.json();
	} catch {
		return undefined;
	}
}

function readSuccessMessage(value: unknown): string | undefined {
	if (!isRecord(value) || typeof value.message !== "string") {
		return undefined;
	}

	const message = value.message.trim();
	return message && message.length <= 500 ? message : undefined;
}

function isSafeValidationMessage(value: unknown): value is string {
	return (
		typeof value === "string" &&
		value.length > 0 &&
		value.length <= 300 &&
		!value.includes("\n") &&
		!value.includes("\r") &&
		!value.includes("<") &&
		!value.includes(">")
	);
}

const apiFieldNames = {
	name: "name",
	email: "email",
	phone: "phone",
	service: "service",
	message: "message",
	captchatoken: "captchaToken",
} as const satisfies Record<string, keyof ContactValidationErrors>;

function parseValidationErrors(value: unknown): {
	fieldErrors?: ContactValidationErrors;
	formErrors?: readonly string[];
} {
	if (!isRecord(value) || !isRecord(value.errors)) {
		return {};
	}

	const fieldErrors: ContactValidationErrors = {};
	const formErrors: string[] = [];

	for (const [key, messages] of Object.entries(value.errors)) {
		if (!Array.isArray(messages)) {
			continue;
		}

		const safeMessage = messages.find(isSafeValidationMessage);
		if (!safeMessage) {
			continue;
		}

		if (!key) {
			formErrors.push(safeMessage);
			continue;
		}

		const fieldName = apiFieldNames[key.toLowerCase() as keyof typeof apiFieldNames];
		if (fieldName) {
			fieldErrors[fieldName] = safeMessage;
		}
	}

	return {
		fieldErrors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
		formErrors: formErrors.length > 0 ? formErrors : undefined,
	};
}

function parseRetryAfter(value: string | null, now: () => number): number | undefined {
	if (!value) {
		return undefined;
	}

	const seconds = Number(value);
	if (Number.isInteger(seconds) && seconds >= 0) {
		return Math.min(seconds, maximumClientRetryDelaySeconds);
	}

	const retryDate = Date.parse(value);
	if (Number.isNaN(retryDate)) {
		return undefined;
	}

	const retryDelaySeconds = Math.max(0, Math.ceil((retryDate - now()) / 1000));
	return Math.min(retryDelaySeconds, maximumClientRetryDelaySeconds);
}

export async function submitContactRequest(
	request: ContactRequest,
	options: ContactApiClientOptions = {}
): Promise<ContactApiResult> {
	const baseUrl = options.baseUrl === undefined ? apiConfig.baseUrl : options.baseUrl;

	if (!baseUrl) {
		return {
			ok: false,
			kind: "configuration",
			tokenMayBeConsumed: false,
		};
	}

	const fetchImplementation = options.fetchImplementation ?? fetch;
	let response: Response;

	try {
		response = await fetchImplementation(new URL(contactEndpoint, baseUrl), {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(request),
		});
	} catch {
		return {
			ok: false,
			kind: "network",
			tokenMayBeConsumed: true,
		};
	}

	if (response.status === 200) {
		const message = readSuccessMessage(await readJson(response));

		return message
			? { ok: true, message, tokenMayBeConsumed: true }
			: { ok: false, kind: "malformed-response", tokenMayBeConsumed: true };
	}

	if (response.status === 400) {
		return {
			ok: false,
			kind: "validation",
			tokenMayBeConsumed: true,
			...parseValidationErrors(await readJson(response)),
		};
	}

	if (response.status === 413) {
		return { ok: false, kind: "payload-too-large", tokenMayBeConsumed: true };
	}

	if (response.status === 415) {
		return { ok: false, kind: "unsupported-media-type", tokenMayBeConsumed: true };
	}

	if (response.status === 429) {
		return {
			ok: false,
			kind: "rate-limited",
			tokenMayBeConsumed: true,
			retryAfterSeconds: parseRetryAfter(
				response.headers.get("Retry-After"),
				options.now ?? Date.now
			),
		};
	}

	if (response.status === 503) {
		return { ok: false, kind: "service-unavailable", tokenMayBeConsumed: true };
	}

	return { ok: false, kind: "server", tokenMayBeConsumed: true };
}
