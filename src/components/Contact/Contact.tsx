import { MapPin, Phone, ShieldCheck } from "lucide-react";
import type { FormEvent } from "react";

import { contactDetails, createWhatsAppUrl } from "../../config/contact";
import { services } from "../../config/services";
import type { ServiceDefinition } from "../../types/service";
import { ActionLink } from "../ActionLink/ActionLink";
import { Section } from "../Section/Section";

import WhatsappIcon from "../../assets/icons/social/whatsapp-green.webp";

function preventSubmission(event: FormEvent<HTMLFormElement>) {
	event.preventDefault();
}

export interface ContactProps {
	readonly selectedService?: ServiceDefinition;
}

export function Contact({ selectedService }: Readonly<ContactProps> = {}) {
	const whatsAppUrl = selectedService
		? createWhatsAppUrl(`Quiero recibir información sobre ${selectedService.name}.`)
		: contactDetails.whatsAppUrl;

	return (
		<Section aria-labelledby="contact-title" className="contact" id="contacto" tone="page">
			<header className="contact__header">
				<p className="contact__eyebrow">Contacto</p>
				<h2 id="contact-title">
					{selectedService?.detail.contact.heading ?? "Hablemos de tu proyecto"}
				</h2>
				{selectedService ? (
					<p>{selectedService.detail.contact.description}</p>
				) : (
					<>
						<p>Cada proyecto tiene necesidades diferentes.</p>
						<p>
							Cuéntanos brevemente qué necesitas y nuestro equipo podrá ponerse en contacto contigo
							para conocer mejor tu proyecto y orientarte sobre el servicio más adecuado.
						</p>
					</>
				)}
			</header>

			<div className="contact__layout">
				<form className="contact__form" onSubmit={preventSubmission}>
					<div className="contact__field">
						<label htmlFor="contact-name">Nombre</label>
						<input autoComplete="name" id="contact-name" name="name" required type="text" />
					</div>

					<div className="contact__fields-row">
						<div className="contact__field">
							<label htmlFor="contact-email">Correo electrónico</label>
							<input
								aria-describedby="contact-channel-help"
								autoComplete="email"
								id="contact-email"
								name="email"
								type="email"
							/>
						</div>

						<div className="contact__field">
							<label htmlFor="contact-phone">Teléfono</label>
							<input
								aria-describedby="contact-channel-help"
								autoComplete="tel"
								id="contact-phone"
								name="phone"
								type="tel"
							/>
						</div>
					</div>
					<p className="contact__help" id="contact-channel-help">
						Ingresa al menos un medio de contacto.
					</p>

					<div className="contact__field">
						<label htmlFor="contact-service">Servicio</label>
						<select defaultValue={selectedService?.id ?? ""} id="contact-service" name="service">
							<option value="">Selecciona un servicio (opcional)</option>
							{services.map((service) => (
								<option key={service.id} value={service.id}>
									{service.name}
								</option>
							))}
						</select>
					</div>

					<div className="contact__field">
						<label htmlFor="contact-message">Mensaje</label>
						<textarea id="contact-message" name="message" required rows={5} />
					</div>

					<div
						aria-label="Espacio reservado para la verificación CAPTCHA"
						className="contact__captcha"
					>
						<ShieldCheck aria-hidden="true" focusable="false" size={24} strokeWidth={2} />
						<span>Verificación CAPTCHA</span>
					</div>

					<button className="contact__submit" type="submit">
						Enviar solicitud
					</button>
				</form>

				<aside className="contact__aside" aria-label="Otros canales de contacto">
					<div className="contact__whatsapp">
						<div className="mb-4">
							<img alt="Logo de WhatsApp" src={WhatsappIcon} width={35} height={35} />
						</div>
						<h3>¿Prefieres hablar directamente con nosotros?</h3>
						<p>También puedes escribirnos por WhatsApp y conversar con nuestro equipo.</p>
						<ActionLink
							aria-label={
								selectedService
									? `Hablemos por WhatsApp sobre ${selectedService.name}`
									: "Hablemos por WhatsApp"
							}
							href={whatsAppUrl}
							rel="noreferrer"
							target="_blank"
						>
							<span className="mr-2">Hablemos por WhatsApp</span>
						</ActionLink>
					</div>

					<address className="contact__address">
						<p>
							<MapPin aria-hidden="true" focusable="false" size={22} strokeWidth={2} />
							<span>
								{contactDetails.addressLine}
								<br />
								{contactDetails.cityLine}
							</span>
						</p>
						<p>
							<Phone aria-hidden="true" focusable="false" size={22} strokeWidth={2} />
							<a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
						</p>
					</address>

					<iframe
						allowFullScreen
						className="contact__map"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						src={contactDetails.mapEmbedUrl}
						title="Ubicación de Ancestral Servicios Ambientales"
					/>
				</aside>
			</div>
		</Section>
	);
}
