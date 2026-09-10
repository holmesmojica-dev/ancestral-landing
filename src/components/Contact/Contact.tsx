import { MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import WhatsappIcon from "../../assets/icons/social/whatsapp-green.webp";
import {
	createContactRequest,
	validateContactRequest,
	type ContactField,
	type ContactFormValues,
	type ContactValidationErrors,
} from "../../contact/contactRequest";
import { contactDetails, createWhatsAppUrl } from "../../config/contact";
import { services } from "../../config/services";
import { turnstileConfig } from "../../config/turnstile";
import {
	submitContactRequest,
	type ContactApiClient,
	type ContactApiFailure,
} from "../../services/contactApi";
import type { ContactRequest } from "../../types/contact";
import type { ServiceDefinition } from "../../types/service";
import { ActionLink } from "../ActionLink/ActionLink";
import { Section } from "../Section/Section";
import { Turnstile } from "../Turnstile/Turnstile";

interface SubmissionFeedback {
	readonly kind: "pending" | "success" | "error";
	readonly message: string;
}

const fieldOrder: readonly ContactField[] = [
	"name",
	"email",
	"phone",
	"service",
	"message",
	"captchaToken",
];

function createInitialValues(selectedService?: ServiceDefinition): ContactFormValues {
	return {
		name: "",
		email: "",
		phone: "",
		service: selectedService?.id ?? "",
		message: "",
	};
}

function getFailureMessage(failure: ContactApiFailure): string {
	switch (failure.kind) {
		case "configuration":
			return "El formulario no está disponible temporalmente. Puedes contactarnos por WhatsApp.";
		case "validation":
			return failure.formErrors?.[0] ?? "Revisa los campos señalados e intenta nuevamente.";
		case "payload-too-large":
			return "La solicitud es demasiado extensa. Reduce su contenido e intenta nuevamente.";
		case "unsupported-media-type":
			return "No pudimos enviar la solicitud por un problema de formato. Intenta nuevamente.";
		case "rate-limited":
			return failure.retryAfterSeconds && failure.retryAfterSeconds > 0
				? `Has realizado varios intentos. Podrás intentarlo nuevamente en ${failure.retryAfterSeconds} segundos.`
				: "Has realizado varios intentos. Espera unos minutos antes de intentarlo nuevamente.";
		case "service-unavailable":
			return "No pudimos procesar tu solicitud temporalmente. Intenta más tarde o escríbenos por WhatsApp.";
		case "network":
			return "No pudimos conectar con el servicio. Revisa tu conexión e intenta nuevamente.";
		case "malformed-response":
		case "server":
			return "Ocurrió un problema al enviar tu solicitud. Intenta nuevamente más tarde.";
	}
}

export interface ContactProps {
	readonly selectedService?: ServiceDefinition;
	readonly apiClient?: ContactApiClient;
}

export function Contact({
	selectedService,
	apiClient = submitContactRequest,
}: Readonly<ContactProps> = {}) {
	const [values, setValues] = useState<ContactFormValues>(() =>
		createInitialValues(selectedService)
	);
	const [captchaToken, setCaptchaToken] = useState<ContactRequest["captchaToken"]>("");
	const [fieldErrors, setFieldErrors] = useState<ContactValidationErrors>({});
	const [feedback, setFeedback] = useState<SubmissionFeedback>();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [retryAfterSeconds, setRetryAfterSeconds] = useState<number>();
	const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
	const [focusTarget, setFocusTarget] = useState<ContactField | "feedback">();
	const formRef = useRef<HTMLFormElement>(null);
	const feedbackRef = useRef<HTMLDivElement>(null);
	const submittingRef = useRef(false);
	const whatsAppUrl = selectedService
		? createWhatsAppUrl(`Quiero recibir información sobre ${selectedService.name}.`)
		: contactDetails.whatsAppUrl;

	useEffect(() => {
		setValues((currentValues) => ({
			...currentValues,
			service: selectedService?.id ?? "",
		}));
	}, [selectedService?.id]);

	useEffect(() => {
		if (!retryAfterSeconds) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setRetryAfterSeconds((current) => (current && current > 1 ? current - 1 : undefined));
		}, 1000);

		return () => window.clearTimeout(timeoutId);
	}, [retryAfterSeconds]);

	useEffect(() => {
		if (!focusTarget) {
			return;
		}

		if (focusTarget === "feedback") {
			feedbackRef.current?.focus();
		} else {
			formRef.current?.querySelector<HTMLElement>(`[name="${focusTarget}"]`)?.focus();
		}

		setFocusTarget(undefined);
	}, [focusTarget]);

	const updateField = (
		field: keyof ContactFormValues,
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		setValues((currentValues) => ({ ...currentValues, [field]: event.target.value }));
		setFieldErrors((currentErrors) => {
			if (!currentErrors[field]) {
				return currentErrors;
			}

			const nextErrors = { ...currentErrors };
			delete nextErrors[field];
			return nextErrors;
		});
	};

	const handleTokenChange = (token: string) => {
		setCaptchaToken(token);
		setFieldErrors((currentErrors) => {
			if (!currentErrors.captchaToken) {
				return currentErrors;
			}

			const nextErrors = { ...currentErrors };
			delete nextErrors.captchaToken;
			return nextErrors;
		});
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (submittingRef.current || retryAfterSeconds) {
			return;
		}

		const request = createContactRequest(values, captchaToken);
		const validationErrors = validateContactRequest(request);

		if (Object.keys(validationErrors).length > 0) {
			const firstInvalidField = fieldOrder.find((field) => validationErrors[field]);

			setFieldErrors(validationErrors);
			setFeedback({
				kind: "error",
				message: "Revisa los campos señalados e intenta nuevamente.",
			});
			setFocusTarget(firstInvalidField === "captchaToken" ? "feedback" : firstInvalidField);
			return;
		}

		submittingRef.current = true;
		setIsSubmitting(true);
		setFieldErrors({});
		setFeedback({ kind: "pending", message: "Enviando solicitud…" });

		let result;
		try {
			result = await apiClient(request);
		} catch {
			result = {
				ok: false,
				kind: "network",
				tokenMayBeConsumed: true,
			} as const;
		}

		if (result.tokenMayBeConsumed) {
			setCaptchaToken("");
			setTurnstileResetSignal((signal) => signal + 1);
		}

		if (result.ok) {
			setValues(createInitialValues(selectedService));
			setFeedback({ kind: "success", message: result.message });
			setFocusTarget("feedback");
		} else {
			const serverFieldErrors = result.fieldErrors ?? {};
			const firstInvalidField = fieldOrder.find((field) => serverFieldErrors[field]);

			setFieldErrors(serverFieldErrors);
			setFeedback({ kind: "error", message: getFailureMessage(result) });
			setFocusTarget(
				firstInvalidField === "captchaToken" ? "feedback" : (firstInvalidField ?? "feedback")
			);

			if (result.kind === "rate-limited" && result.retryAfterSeconds) {
				setRetryAfterSeconds(result.retryAfterSeconds);
			}
		}

		submittingRef.current = false;
		setIsSubmitting(false);
	};

	const emailHelp = ["contact-channel-help", fieldErrors.email ? "contact-email-error" : undefined]
		.filter(Boolean)
		.join(" ");
	const phoneHelp = ["contact-channel-help", fieldErrors.phone ? "contact-phone-error" : undefined]
		.filter(Boolean)
		.join(" ");
	const submissionDisabled = !captchaToken || isSubmitting || Boolean(retryAfterSeconds);

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
				<form
					aria-busy={isSubmitting}
					className="contact__form"
					noValidate
					onSubmit={handleSubmit}
					ref={formRef}
				>
					<div className="contact__field">
						<label htmlFor="contact-name">Nombre</label>
						<input
							aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
							aria-invalid={fieldErrors.name ? true : undefined}
							autoComplete="name"
							id="contact-name"
							maxLength={200}
							minLength={4}
							name="name"
							onChange={(event) => updateField("name", event)}
							required
							type="text"
							value={values.name}
						/>
						{fieldErrors.name ? (
							<p className="contact__error" id="contact-name-error">
								{fieldErrors.name}
							</p>
						) : null}
					</div>

					<div className="contact__fields-row">
						<div className="contact__field">
							<label htmlFor="contact-email">Correo electrónico</label>
							<input
								aria-describedby={emailHelp}
								aria-invalid={fieldErrors.email ? true : undefined}
								autoComplete="email"
								id="contact-email"
								maxLength={200}
								name="email"
								onChange={(event) => updateField("email", event)}
								type="email"
								value={values.email}
							/>
							{fieldErrors.email ? (
								<p className="contact__error" id="contact-email-error">
									{fieldErrors.email}
								</p>
							) : null}
						</div>

						<div className="contact__field">
							<label htmlFor="contact-phone">Teléfono</label>
							<input
								aria-describedby={phoneHelp}
								aria-invalid={fieldErrors.phone ? true : undefined}
								autoComplete="tel"
								id="contact-phone"
								name="phone"
								onChange={(event) => updateField("phone", event)}
								type="tel"
								value={values.phone}
							/>
							{fieldErrors.phone ? (
								<p className="contact__error" id="contact-phone-error">
									{fieldErrors.phone}
								</p>
							) : null}
						</div>
					</div>
					<p className="contact__help" id="contact-channel-help">
						Ingresa al menos un medio de contacto.
					</p>

					<div className="contact__field">
						<label htmlFor="contact-service">Servicio</label>
						<select
							aria-describedby={fieldErrors.service ? "contact-service-error" : undefined}
							aria-invalid={fieldErrors.service ? true : undefined}
							id="contact-service"
							name="service"
							onChange={(event) => updateField("service", event)}
							value={values.service}
						>
							<option value="">Selecciona un servicio (opcional)</option>
							{services.map((service) => (
								<option key={service.id} value={service.id}>
									{service.name}
								</option>
							))}
						</select>
						{fieldErrors.service ? (
							<p className="contact__error" id="contact-service-error">
								{fieldErrors.service}
							</p>
						) : null}
					</div>

					<div className="contact__field">
						<label htmlFor="contact-message">Mensaje</label>
						<textarea
							aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
							aria-invalid={fieldErrors.message ? true : undefined}
							id="contact-message"
							maxLength={2000}
							minLength={10}
							name="message"
							onChange={(event) => updateField("message", event)}
							required
							rows={5}
							value={values.message}
						/>
						{fieldErrors.message ? (
							<p className="contact__error" id="contact-message-error">
								{fieldErrors.message}
							</p>
						) : null}
					</div>

					<Turnstile
						onTokenChange={handleTokenChange}
						resetSignal={turnstileResetSignal}
						siteKey={turnstileConfig.siteKey}
					/>

					<button className="contact__submit" disabled={submissionDisabled} type="submit">
						{isSubmitting ? "Enviando solicitud…" : "Enviar solicitud"}
					</button>

					{feedback ? (
						<div
							aria-live={feedback.kind === "error" ? "assertive" : "polite"}
							className={`contact__status contact__status--${feedback.kind}`}
							ref={feedbackRef}
							role={feedback.kind === "error" ? "alert" : "status"}
							tabIndex={-1}
						>
							{feedback.message}
						</div>
					) : null}
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
