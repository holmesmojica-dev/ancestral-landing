import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { contactDetails } from "../../config/contact";
import { services } from "../../config/services";
import type { ContactApiClient, ContactApiResult } from "../../services/contactApi";
import { Contact } from "./Contact";

vi.mock("../Turnstile/Turnstile", () => ({
	Turnstile: ({
		onTokenChange,
		resetSignal,
	}: {
		readonly onTokenChange: (token: string) => void;
		readonly resetSignal?: number;
	}) => (
		<div aria-label="Verificación de seguridad" data-reset-signal={resetSignal} role="group">
			<button onClick={() => onTokenChange("verified-token")} type="button">
				Completar verificación
			</button>
			<button onClick={() => onTokenChange("")} type="button">
				Expirar verificación
			</button>
		</div>
	),
}));

const successResult: ContactApiResult = {
	ok: true,
	message: "Hemos recibido tu solicitud.",
	tokenMayBeConsumed: true,
};

function fillValidForm() {
	fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "  Ana Torres  " } });
	fireEvent.change(screen.getByLabelText("Correo electrónico"), {
		target: { value: "  ana@example.com  " },
	});
	fireEvent.change(screen.getByLabelText("Servicio"), {
		target: { value: services[0].id },
	});
	fireEvent.change(screen.getByLabelText("Mensaje"), {
		target: { value: "  Necesito información sobre un proyecto ambiental.  " },
	});
	fireEvent.click(screen.getByRole("button", { name: "Completar verificación" }));
}

function submitForm() {
	const form = document.querySelector<HTMLFormElement>(".contact__form");
	expect(form).not.toBeNull();
	fireEvent.submit(form as HTMLFormElement);
}

describe("Contact", () => {
	it("renders the contact form, CAPTCHA, and alternate contact channels", () => {
		render(<Contact />);

		expect(screen.getByRole("region", { name: "Hablemos de tu proyecto" })).toHaveAttribute(
			"id",
			"contacto"
		);
		expect(screen.getByLabelText("Nombre")).toBeRequired();
		expect(screen.getByLabelText("Correo electrónico")).toHaveAttribute("type", "email");
		expect(screen.getByLabelText("Teléfono")).toHaveAttribute("type", "tel");
		expect(screen.getByLabelText("Mensaje")).toBeRequired();
		expect(screen.getByText("Ingresa al menos un medio de contacto.")).toBeVisible();

		const serviceSelect = screen.getByLabelText("Servicio");
		expect(serviceSelect).toHaveValue("");
		expect(serviceSelect.querySelectorAll("option")).toHaveLength(services.length + 1);

		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toBeVisible();
		expect(screen.getByRole("button", { name: "Enviar solicitud" })).toBeDisabled();
		expect(screen.getByRole("link", { name: "Hablemos por WhatsApp" })).toHaveAttribute(
			"href",
			contactDetails.whatsAppUrl
		);
		expect(screen.getByRole("link", { name: contactDetails.phoneDisplay })).toHaveAttribute(
			"href",
			contactDetails.phoneHref
		);
		expect(screen.getByTitle("Ubicación de Ancestral Servicios Ambientales")).toHaveAttribute(
			"loading",
			"lazy"
		);
	});

	it("constructs and submits the exact normalized API payload including the captcha token", async () => {
		const apiClient = vi.fn<ContactApiClient>().mockResolvedValue(successResult);
		render(<Contact apiClient={apiClient} />);
		fillValidForm();

		submitForm();

		await waitFor(() => expect(apiClient).toHaveBeenCalledOnce());
		expect(apiClient).toHaveBeenCalledWith({
			name: "Ana Torres",
			email: "ana@example.com",
			phone: null,
			service: "Servicios Ambientales",
			message: "Necesito información sobre un proyecto ambiental.",
			captchaToken: "verified-token",
		});
	});

	it("prevents duplicate submissions, announces loading, and resets after success", async () => {
		let resolveRequest: (result: ContactApiResult) => void = () => undefined;
		const pendingRequest = new Promise<ContactApiResult>((resolve) => {
			resolveRequest = resolve;
		});
		const apiClient = vi.fn<ContactApiClient>().mockReturnValue(pendingRequest);
		render(<Contact apiClient={apiClient} />);
		fillValidForm();

		submitForm();

		expect(screen.getByRole("button", { name: "Enviando solicitud…" })).toBeDisabled();
		const loadingStatus = screen.getByRole("status");
		expect(loadingStatus).toHaveTextContent("Enviando solicitud…");
		expect(loadingStatus.tagName).toBe("OUTPUT");
		submitForm();
		expect(apiClient).toHaveBeenCalledOnce();

		await act(async () => resolveRequest(successResult));

		expect(await screen.findByRole("status")).toHaveTextContent("Hemos recibido tu solicitud.");
		expect(screen.getByLabelText("Nombre")).toHaveValue("");
		expect(screen.getByLabelText("Correo electrónico")).toHaveValue("");
		expect(screen.getByLabelText("Mensaje")).toHaveValue("");
		expect(screen.getByRole("button", { name: "Enviar solicitud" })).toBeDisabled();
		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toHaveAttribute(
			"data-reset-signal",
			"1"
		);
		expect(screen.getByRole("status")).toHaveFocus();
	});

	it("preserves the selected service after a successful service-detail submission", async () => {
		const apiClient = vi.fn<ContactApiClient>().mockResolvedValue(successResult);
		render(<Contact apiClient={apiClient} selectedService={services[1]} />);
		fillValidForm();
		fireEvent.change(screen.getByLabelText("Servicio"), { target: { value: services[1].id } });

		submitForm();

		await screen.findByText("Hemos recibido tu solicitud.");
		expect(screen.getByLabelText("Servicio")).toHaveValue(services[1].id);
	});

	it("shows associated client validation errors and preserves an unconsumed token", () => {
		const apiClient = vi.fn<ContactApiClient>();
		render(<Contact apiClient={apiClient} />);
		fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Ana" } });
		fireEvent.change(screen.getByLabelText("Mensaje"), { target: { value: "Corto" } });
		fireEvent.click(screen.getByRole("button", { name: "Completar verificación" }));

		submitForm();

		expect(apiClient).not.toHaveBeenCalled();
		expect(screen.getByRole("alert")).toHaveTextContent(
			"Revisa los campos señalados e intenta nuevamente."
		);
		expect(screen.getByLabelText("Nombre")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByLabelText("Nombre")).toHaveAccessibleDescription(
			"El nombre debe tener al menos 4 caracteres."
		);
		expect(screen.getByLabelText("Correo electrónico")).toHaveAttribute("aria-invalid", "true");
		expect(screen.getByRole("button", { name: "Enviar solicitud" })).toBeEnabled();
		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toHaveAttribute(
			"data-reset-signal",
			"0"
		);
		expect(screen.getByLabelText("Nombre")).toHaveFocus();
	});

	it("surfaces only safe backend validation messages and resets the consumed token", async () => {
		const apiClient = vi.fn<ContactApiClient>().mockResolvedValue({
			ok: false,
			kind: "validation",
			tokenMayBeConsumed: true,
			fieldErrors: { name: "El nombre no es válido." },
			formErrors: ["Revisa los datos de contacto."],
		});
		render(<Contact apiClient={apiClient} />);
		fillValidForm();

		submitForm();

		expect(await screen.findByRole("alert")).toHaveTextContent("Revisa los datos de contacto.");
		expect(screen.getByLabelText("Nombre")).toHaveAccessibleDescription("El nombre no es válido.");
		expect(screen.getByLabelText("Nombre")).toHaveFocus();
		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toHaveAttribute(
			"data-reset-signal",
			"1"
		);
	});

	it("honors Retry-After and prevents an immediate repeated submission", async () => {
		const apiClient = vi.fn<ContactApiClient>().mockResolvedValue({
			ok: false,
			kind: "rate-limited",
			tokenMayBeConsumed: true,
			retryAfterSeconds: 120,
		});
		render(<Contact apiClient={apiClient} />);
		fillValidForm();

		submitForm();

		expect(await screen.findByRole("alert")).toHaveTextContent(
			"Podrás intentarlo nuevamente en 120 segundos."
		);
		fireEvent.click(screen.getByRole("button", { name: "Completar verificación" }));
		expect(screen.getByRole("button", { name: "Enviar solicitud" })).toBeDisabled();
		submitForm();
		expect(apiClient).toHaveBeenCalledOnce();
	});

	it.each([
		[
			"service-unavailable",
			"No pudimos procesar tu solicitud temporalmente. Intenta más tarde o escríbenos por WhatsApp.",
		],
		[
			"payload-too-large",
			"La solicitud es demasiado extensa. Reduce su contenido e intenta nuevamente.",
		],
		[
			"unsupported-media-type",
			"No pudimos enviar la solicitud por un problema de formato. Intenta nuevamente.",
		],
		["network", "No pudimos conectar con el servicio. Revisa tu conexión e intenta nuevamente."],
		["server", "Ocurrió un problema al enviar tu solicitud. Intenta nuevamente más tarde."],
		[
			"malformed-response",
			"Ocurrió un problema al enviar tu solicitud. Intenta nuevamente más tarde.",
		],
	] as const)("shows safe feedback for %s failures", async (kind, message) => {
		const apiClient = vi.fn<ContactApiClient>().mockResolvedValue({
			ok: false,
			kind,
			tokenMayBeConsumed: true,
		});
		render(<Contact apiClient={apiClient} />);
		fillValidForm();

		submitForm();

		expect(await screen.findByRole("alert")).toHaveTextContent(message);
		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toHaveAttribute(
			"data-reset-signal",
			"1"
		);
	});

	it("fails safely on missing API configuration without consuming the token", async () => {
		const apiClient = vi.fn<ContactApiClient>().mockResolvedValue({
			ok: false,
			kind: "configuration",
			tokenMayBeConsumed: false,
		});
		render(<Contact apiClient={apiClient} />);
		fillValidForm();

		submitForm();

		expect(await screen.findByRole("alert")).toHaveTextContent(
			"El formulario no está disponible temporalmente."
		);
		expect(screen.getByRole("button", { name: "Enviar solicitud" })).toBeEnabled();
		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toHaveAttribute(
			"data-reset-signal",
			"0"
		);
	});

	it("keeps captchaToken out of the DOM and clears it when it expires", () => {
		render(<Contact />);

		const submitButton = screen.getByRole("button", { name: "Enviar solicitud" });
		const form = submitButton.closest("form");
		expect(form).not.toBeNull();
		expect(form?.querySelector('input[name="captchaToken"]')).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Completar verificación" }));
		expect(submitButton).toBeEnabled();

		fireEvent.click(screen.getByRole("button", { name: "Expirar verificación" }));
		expect(submitButton).toBeDisabled();
		expect(form?.querySelector('input[name="captchaToken"]')).not.toBeInTheDocument();
	});
});
