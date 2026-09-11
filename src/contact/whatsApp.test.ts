import { describe, expect, it } from "vitest";

import { contactDetails } from "../config/contact";
import { services } from "../config/services";
import {
	createContactFormWhatsAppMessage,
	createContactFormWhatsAppUrl,
	genericWebsiteWhatsAppMessage,
	genericWebsiteWhatsAppUrl,
} from "./whatsApp";

function expectWhatsAppUrl(urlValue: string, expectedMessage: string): URL {
	const url = new URL(urlValue);
	const decodedText = url.searchParams.get("text");

	expect(url.hostname).toBe("api.whatsapp.com");
	expect(url.pathname).toBe("/send");
	expect(url.searchParams.get("phone")).toBe(contactDetails.whatsAppPhone);
	expect(decodedText).toBe(expectedMessage);
	expect(decodedText).not.toContain("\uFFFD");
	expect(url.toString()).not.toContain("%EF%BF%BD");
	expect(url.toString()).not.toContain("%25F0%259F");
	return url;
}

describe("generic website WhatsApp message", () => {
	it("identifies the website contact and encodes the complete message", () => {
		const expectedMessage = [
			"🟢 *Contacto desde ancestral-col.com*",
			"",
			"Hola, me gustaría recibir información sobre los servicios de Ancestral.",
		].join("\n");

		expect(genericWebsiteWhatsAppMessage).toBe(expectedMessage);
		const url = expectWhatsAppUrl(genericWebsiteWhatsAppUrl, expectedMessage);
		expect(url.toString()).toContain("%F0%9F%9F%A2");
	});
});

describe("contact form WhatsApp message", () => {
	it("builds the compact identifiable message when only Name is populated", () => {
		const message = createContactFormWhatsAppMessage({
			name: "  Carlos Pérez  ",
			email: " ",
			phone: "",
			service: " ",
			message: "",
		});

		expect(message).toBe(
			[
				"🟢 *Contacto desde ancestral-col.com*",
				"",
				"👤 *Nombre:* Carlos Pérez",
				"",
				"Hola, me gustaría recibir información sobre los servicios de Ancestral.",
				"",
				"_Mensaje generado desde el formulario web de Ancestral._",
			].join("\n")
		);
		expect(message).not.toMatch(/Servicio:|Correo:|Teléfono:|Consulta:|null|undefined/);
	});

	it("includes every populated field with the official service label and exact encoding", () => {
		const values = {
			name: "  Ángela & José  ",
			email: "  equipo+campo@example.com  ",
			phone: "  +57 (300) 123-4567  ",
			service: services[2].id,
			message: "  Información sobre árboles & agua.\nSegunda línea.  ",
		};
		const expectedMessage = [
			"🟢 *Contacto desde ancestral-col.com*",
			"",
			"👤 *Nombre:* Ángela & José",
			`🌿 *Servicio:* ${services[2].name}`,
			"✉️ *Correo:* equipo+campo@example.com",
			"📞 *Teléfono:* +57 (300) 123-4567",
			"",
			"💬 *Consulta:*",
			"Información sobre árboles & agua.\nSegunda línea.",
			"",
			"_Mensaje generado desde el formulario web de Ancestral._",
		].join("\n");

		const url = createContactFormWhatsAppUrl(values);

		expect(createContactFormWhatsAppMessage(values)).toBe(expectedMessage);
		const parsedUrl = expectWhatsAppUrl(url, expectedMessage);
		expect(parsedUrl.toString()).toContain("%F0%9F%9F%A2");
		expect(parsedUrl.toString()).toContain("%F0%9F%91%A4");
		expect(parsedUrl.toString()).toContain("%F0%9F%8C%BF");
		expect(parsedUrl.toString()).toContain("%E2%9C%89%EF%B8%8F");
		expect(parsedUrl.toString()).toContain("%F0%9F%93%9E");
		expect(parsedUrl.searchParams.get("text")).toContain("💬");
	});

	it("omits an unknown service value instead of rendering a placeholder", () => {
		const message = createContactFormWhatsAppMessage({
			name: "Carlos Pérez",
			email: "",
			phone: "",
			service: "unknown-service",
			message: "Necesito información.",
		});

		expect(message).not.toContain("Servicio:");
		expect(message).toContain("💬 *Consulta:*\nNecesito información.");
	});
});
