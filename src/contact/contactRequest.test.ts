import { describe, expect, it } from "vitest";

import { services } from "../config/services";
import type { ContactRequest } from "../types/contact";
import {
	createContactRequest,
	validateContactRequest,
	type ContactFormValues,
} from "./contactRequest";

const validRequest: ContactRequest = {
	name: "Ana Torres",
	email: "ana@example.com",
	phone: null,
	service: "Servicios Ambientales",
	message: "Necesito información sobre un proyecto ambiental.",
	captchaToken: "verified-token",
};

describe("createContactRequest", () => {
	it("normalizes values, converts empty optional fields to null, and keeps the token in memory", () => {
		const values: ContactFormValues = {
			name: "  Ana Torres  ",
			email: "   ",
			phone: "  +57 316 411 4933  ",
			service: " ",
			message: "  Necesito información sobre un proyecto ambiental.  ",
		};

		expect(createContactRequest(values, "verified-token")).toEqual({
			name: "Ana Torres",
			email: null,
			phone: "+57 316 411 4933",
			service: null,
			message: "Necesito información sobre un proyecto ambiental.",
			captchaToken: "verified-token",
		});
	});

	it.each(services)("maps the $id frontend ID to the exact $name API value", (service) => {
		const values: ContactFormValues = {
			name: "Ana Torres",
			email: "ana@example.com",
			phone: "",
			service: service.id,
			message: "Necesito información sobre este servicio.",
		};

		expect(createContactRequest(values, "verified-token").service).toBe(service.name);
	});

	it("does not propagate an unknown frontend service value into the API contract", () => {
		const values: ContactFormValues = {
			name: "Ana Torres",
			email: "ana@example.com",
			phone: "",
			service: "unknown-service",
			message: "Necesito información sobre este servicio.",
		};

		expect(createContactRequest(values, "verified-token").service).toBeNull();
	});
});

describe("validateContactRequest", () => {
	it("accepts a request that matches all backend rules", () => {
		expect(validateContactRequest(validRequest)).toEqual({});
	});

	it.each([
		["", "El nombre es obligatorio."],
		["Ana", "El nombre debe tener al menos 4 caracteres."],
		["A".repeat(201), "El nombre no puede superar los 200 caracteres."],
	] as const)("validates the name boundary for %s", (name, expectedMessage) => {
		expect(validateContactRequest({ ...validRequest, name }).name).toBe(expectedMessage);
	});

	it.each([
		["", "El mensaje es obligatorio."],
		["Muy corto", "El mensaje debe tener al menos 10 caracteres."],
		["M".repeat(2001), "El mensaje no puede superar los 2000 caracteres."],
	] as const)("validates the message boundary", (message, expectedMessage) => {
		expect(validateContactRequest({ ...validRequest, message }).message).toBe(expectedMessage);
	});

	it("requires at least one contact channel", () => {
		const errors = validateContactRequest({ ...validRequest, email: null, phone: null });

		expect(errors.email).toBe("Ingresa al menos un correo electrónico o un teléfono.");
		expect(errors.phone).toBe("Ingresa al menos un correo electrónico o un teléfono.");
	});

	it.each([
		"ana example@example.com",
		"ana@@example.com",
		"@example.com",
		"ana@",
		`${"a".repeat(196)}@x.co`,
	])("rejects invalid email %s", (email) => {
		expect(validateContactRequest({ ...validRequest, email }).email).toBeDefined();
	});

	it.each(["3164114933", "+57 316 411 4933", "+57 (316) 411-4933"])(
		"accepts supported phone formatting for %s",
		(phone) => {
			expect(validateContactRequest({ ...validRequest, email: null, phone }).phone).toBeUndefined();
		}
	);

	it.each([
		"123456",
		"1234567890123456",
		"57+3164114933",
		"++573164114933",
		"+ 573164114933",
		"(3164114933",
		"3164114933)",
		"316--4114933",
		"316/4114933",
	])("rejects invalid phone formatting for %s", (phone) => {
		expect(validateContactRequest({ ...validRequest, email: null, phone }).phone).toBeDefined();
	});

	it("restricts services to the five exact official values", () => {
		for (const service of services) {
			expect(
				validateContactRequest({ ...validRequest, service: service.name }).service
			).toBeUndefined();
		}

		expect(validateContactRequest({ ...validRequest, service: "environmental" }).service).toBe(
			"Selecciona un servicio válido."
		);
	});

	it("requires a captcha token", () => {
		expect(validateContactRequest({ ...validRequest, captchaToken: "" }).captchaToken).toBe(
			"Completa la verificación de seguridad."
		);
	});
});
