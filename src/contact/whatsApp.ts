import { contactDetails } from "../config/contact";
import { services } from "../config/services";
import type { ContactFormValues } from "./contactRequest";

const emoji = {
	contact: "\u{1F7E2}",
	email: "\u{2709}\u{FE0F}",
	message: "\u{1F4AC}",
	name: "\u{1F464}",
	phone: "\u{1F4DE}",
	service: "\u{1F33F}",
} as const;

const websiteSource = `${emoji.contact} *Contacto desde ancestral-col.com*`;
const genericInquiry = "Hola, me gustaría recibir información sobre los servicios de Ancestral.";
const generatedMessageNotice = "_Mensaje generado desde el formulario web de Ancestral._";

export const genericWebsiteWhatsAppMessage = [websiteSource, "", genericInquiry].join("\n");

export function createWhatsAppUrl(message: string): string {
	const url = new URL("https://api.whatsapp.com/send");
	url.searchParams.set("phone", contactDetails.whatsAppPhone);
	url.searchParams.set("text", message);
	return url.toString();
}

export const genericWebsiteWhatsAppUrl = createWhatsAppUrl(genericWebsiteWhatsAppMessage);

export function createContactFormWhatsAppMessage(values: ContactFormValues): string {
	const name = values.name.trim();
	const email = values.email.trim();
	const phone = values.phone.trim();
	const message = values.message.trim();
	const service = services.find(({ id }) => id === values.service.trim())?.name;
	const lines = [websiteSource, "", `${emoji.name} *Nombre:* ${name}`];

	if (service) {
		lines.push(`${emoji.service} *Servicio:* ${service}`);
	}

	if (email) {
		lines.push(`${emoji.email} *Correo:* ${email}`);
	}

	if (phone) {
		lines.push(`${emoji.phone} *Teléfono:* ${phone}`);
	}

	if (message) {
		lines.push("", `${emoji.message} *Consulta:*`, message);
	} else {
		lines.push("", genericInquiry);
	}

	lines.push("", generatedMessageNotice);
	return lines.join("\n");
}

export function createContactFormWhatsAppUrl(values: ContactFormValues): string {
	return createWhatsAppUrl(createContactFormWhatsAppMessage(values));
}
