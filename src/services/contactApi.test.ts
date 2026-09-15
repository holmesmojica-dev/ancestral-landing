import { describe, expect, it, vi } from "vitest";

import type { ContactRequest } from "../types/contact";
import { submitContactRequest } from "./contactApi";

const request: ContactRequest = {
	name: "Ana Torres",
	email: "ana@example.com",
	phone: null,
	service: "Servicios Ambientales",
	message: "Necesito información sobre un proyecto ambiental.",
	captchaToken: "verified-token",
};

function jsonResponse(body: unknown, status = 200, headers?: HeadersInit): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json", ...headers },
	});
}

describe("submitContactRequest", () => {
	it("posts the exact JSON contract to the configured contact endpoint", async () => {
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(jsonResponse({ message: "Hemos recibido tu solicitud." }));

		const result = await submitContactRequest(request, {
			baseUrl: "https://api.ancestral-col.com",
			fetchImplementation,
		});

		expect(result).toEqual({
			ok: true,
			message: "Hemos recibido tu solicitud.",
			tokenMayBeConsumed: true,
		});
		expect(fetchImplementation).toHaveBeenCalledWith(
			new URL("https://api.ancestral-col.com/api/contact"),
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(request),
			}
		);
	});

	it("returns safe ASP.NET validation information and ignores unsafe or unknown details", async () => {
		const fetchImplementation = vi.fn<typeof fetch>().mockResolvedValue(
			jsonResponse(
				{
					title: "Internal validator implementation",
					detail: "stack trace",
					errors: {
						Name: ["El nombre debe tener al menos 4 caracteres."],
						Email: ["<script>alert('unsafe')</script>"],
						UnknownProperty: ["Internal detail"],
						"": ["Ingresa al menos un correo electrónico o un teléfono."],
					},
				},
				400
			)
		);

		const result = await submitContactRequest(request, {
			baseUrl: "https://api.ancestral-col.com",
			fetchImplementation,
		});

		expect(result).toEqual({
			ok: false,
			kind: "validation",
			tokenMayBeConsumed: true,
			fieldErrors: { name: "El nombre debe tener al menos 4 caracteres." },
			formErrors: ["Ingresa al menos un correo electrónico o un teléfono."],
		});
	});

	it("parses Retry-After expressed as seconds", async () => {
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(jsonResponse({}, 429, { "Retry-After": "120" }));

		await expect(
			submitContactRequest(request, {
				baseUrl: "https://api.ancestral-col.com",
				fetchImplementation,
			})
		).resolves.toEqual({
			ok: false,
			kind: "rate-limited",
			tokenMayBeConsumed: true,
			retryAfterSeconds: 120,
		});
	});

	it("bounds an excessive Retry-After expressed as seconds", async () => {
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(jsonResponse({}, 429, { "Retry-After": "86400" }));

		const result = await submitContactRequest(request, {
			baseUrl: "https://api.ancestral-col.com",
			fetchImplementation,
		});

		expect(result).toMatchObject({ retryAfterSeconds: 600 });
	});

	it("parses Retry-After expressed as an HTTP date", async () => {
		const now = new Date("2026-09-10T12:00:00Z");
		const retryDate = new Date(now.getTime() + 90_000).toUTCString();
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(jsonResponse({}, 429, { "Retry-After": retryDate }));

		const result = await submitContactRequest(request, {
			baseUrl: "https://api.ancestral-col.com",
			fetchImplementation,
			now: () => now.getTime(),
		});

		expect(result).toMatchObject({ retryAfterSeconds: 90 });
	});

	it("bounds an excessive Retry-After expressed as an HTTP date", async () => {
		const now = new Date("2026-09-10T12:00:00Z");
		const retryDate = new Date(now.getTime() + 86_400_000).toUTCString();
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(jsonResponse({}, 429, { "Retry-After": retryDate }));

		const result = await submitContactRequest(request, {
			baseUrl: "https://api.ancestral-col.com",
			fetchImplementation,
			now: () => now.getTime(),
		});

		expect(result).toMatchObject({ retryAfterSeconds: 600 });
	});

	it("falls back safely when Retry-After is invalid", async () => {
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(jsonResponse({}, 429, { "Retry-After": "invalid" }));

		const result = await submitContactRequest(request, {
			baseUrl: "https://api.ancestral-col.com",
			fetchImplementation,
		});

		expect(result).toMatchObject({
			kind: "rate-limited",
			retryAfterSeconds: undefined,
		});
	});

	it.each([
		[413, "payload-too-large"],
		[415, "unsupported-media-type"],
		[503, "service-unavailable"],
		[500, "server"],
	] as const)("classifies HTTP %i as %s", async (status, kind) => {
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(new Response(null, { status }));

		await expect(
			submitContactRequest(request, {
				baseUrl: "https://api.ancestral-col.com",
				fetchImplementation,
			})
		).resolves.toMatchObject({ ok: false, kind, tokenMayBeConsumed: true });
	});

	it("handles malformed successful responses without exposing response content", async () => {
		const fetchImplementation = vi
			.fn<typeof fetch>()
			.mockResolvedValue(new Response("not-json", { status: 200 }));

		await expect(
			submitContactRequest(request, {
				baseUrl: "https://api.ancestral-col.com",
				fetchImplementation,
			})
		).resolves.toEqual({
			ok: false,
			kind: "malformed-response",
			tokenMayBeConsumed: true,
		});
	});

	it("handles network failures and treats the token as potentially consumed", async () => {
		const fetchImplementation = vi.fn<typeof fetch>().mockRejectedValue(new TypeError("offline"));

		await expect(
			submitContactRequest(request, {
				baseUrl: "https://api.ancestral-col.com",
				fetchImplementation,
			})
		).resolves.toEqual({ ok: false, kind: "network", tokenMayBeConsumed: true });
	});

	it("fails safely without making a request when API configuration is unavailable", async () => {
		const fetchImplementation = vi.fn<typeof fetch>();

		await expect(
			submitContactRequest(request, { baseUrl: null, fetchImplementation })
		).resolves.toEqual({
			ok: false,
			kind: "configuration",
			tokenMayBeConsumed: false,
		});
		expect(fetchImplementation).not.toHaveBeenCalled();
	});
});
