import { services } from "../config/services";
import type { ContactRequest } from "../types/contact";

export interface ContactFormValues {
	readonly name: string;
	readonly email: string;
	readonly phone: string;
	readonly service: string;
	readonly message: string;
}

export type ContactField = keyof ContactRequest;
export type ContactValidationErrors = Partial<Record<ContactField, string>>;

const officialServiceNames = new Set<string>(services.map((service) => service.name));

function normalizeOptional(value: string): string | null {
	const normalized = value.trim();
	return normalized || null;
}

function mapService(value: string): string | null {
	const normalized = value.trim();

	if (!normalized) {
		return null;
	}

	return services.find((service) => service.id === normalized)?.name ?? null;
}

export function createContactRequest(
	values: ContactFormValues,
	captchaToken: string
): ContactRequest {
	return {
		name: values.name.trim(),
		email: normalizeOptional(values.email),
		phone: normalizeOptional(values.phone),
		service: mapService(values.service),
		message: values.message.trim(),
		captchaToken,
	};
}

function isValidEmail(email: string): boolean {
	if (Array.from(email).some((character) => character.trim() === "")) {
		return false;
	}

	const separatorIndex = email.indexOf("@");
	return (
		separatorIndex > 0 &&
		separatorIndex < email.length - 1 &&
		separatorIndex === email.lastIndexOf("@")
	);
}

function isDigit(character: string): boolean {
	return character >= "0" && character <= "9";
}

function hasAllowedPhoneCharacters(phone: string): boolean {
	return Array.from(phone).every((character) => isDigit(character) || "+ ()-".includes(character));
}

function hasValidPlusSign(phone: string): boolean {
	const plusIndex = phone.indexOf("+");

	return (
		plusIndex === -1 ||
		(plusIndex === 0 && phone.lastIndexOf("+") === 0 && phone.length > 1 && isDigit(phone[1]))
	);
}

function hasValidParentheses(phone: string): boolean {
	let parenthesisDepth = 0;
	let digitsInsideParentheses = 0;

	for (let index = 0; index < phone.length; index += 1) {
		const character = phone[index];
		const previousCharacter = phone[index - 1];

		if (character === "(") {
			if (
				parenthesisDepth !== 0 ||
				(index > 0 && previousCharacter !== undefined && "()-".includes(previousCharacter))
			) {
				return false;
			}

			parenthesisDepth = 1;
			digitsInsideParentheses = 0;
			continue;
		}

		if (character === ")") {
			if (
				parenthesisDepth !== 1 ||
				digitsInsideParentheses === 0 ||
				previousCharacter === undefined ||
				!isDigit(previousCharacter)
			) {
				return false;
			}

			parenthesisDepth = 0;
			continue;
		}

		if (isDigit(character) && parenthesisDepth === 1) {
			digitsInsideParentheses += 1;
		}
	}

	return parenthesisDepth === 0 && !phone.endsWith("(");
}

function hasValidSeparators(phone: string): boolean {
	for (let index = 1; index < phone.length; index += 1) {
		const character = phone[index];
		const previousCharacter = phone[index - 1];

		if (character === "-" && "-+( ".includes(previousCharacter)) {
			return false;
		}

		if (character === " " && "-( ".includes(previousCharacter)) {
			return false;
		}
	}

	return !phone.endsWith("-") && !phone.endsWith(" ");
}

function hasValidDigitCount(phone: string): boolean {
	const digitCount = Array.from(phone).filter(isDigit).length;
	return digitCount >= 7 && digitCount <= 15;
}

function isValidPhone(phone: string): boolean {
	return (
		hasAllowedPhoneCharacters(phone) &&
		hasValidPlusSign(phone) &&
		hasValidParentheses(phone) &&
		hasValidSeparators(phone) &&
		hasValidDigitCount(phone)
	);
}

export function validateContactRequest(request: ContactRequest): ContactValidationErrors {
	const errors: ContactValidationErrors = {};

	if (!request.name) {
		errors.name = "El nombre es obligatorio.";
	} else if (request.name.length < 4) {
		errors.name = "El nombre debe tener al menos 4 caracteres.";
	} else if (request.name.length > 200) {
		errors.name = "El nombre no puede superar los 200 caracteres.";
	}

	if (!request.email && !request.phone) {
		const contactError = "Ingresa al menos un correo electrónico o un teléfono.";
		errors.email = contactError;
		errors.phone = contactError;
	}

	if (request.email) {
		if (request.email.length > 200) {
			errors.email = "El correo electrónico no puede superar los 200 caracteres.";
		} else if (!isValidEmail(request.email)) {
			errors.email = "Ingresa un correo electrónico válido y sin espacios.";
		}
	}

	if (request.phone && !isValidPhone(request.phone)) {
		errors.phone =
			"Ingresa un teléfono válido de 7 a 15 dígitos; puedes usar espacios, paréntesis, guiones y un + inicial.";
	}

	if (request.service && !officialServiceNames.has(request.service)) {
		errors.service = "Selecciona un servicio válido.";
	}

	if (!request.message) {
		errors.message = "El mensaje es obligatorio.";
	} else if (request.message.length < 10) {
		errors.message = "El mensaje debe tener al menos 10 caracteres.";
	} else if (request.message.length > 2000) {
		errors.message = "El mensaje no puede superar los 2000 caracteres.";
	}

	if (!request.captchaToken) {
		errors.captchaToken = "Completa la verificación de seguridad.";
	}

	return errors;
}
