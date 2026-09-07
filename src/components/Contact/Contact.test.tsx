import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { contactDetails } from "../../config/contact";
import { services } from "../../config/services";
import { Contact } from "./Contact";

describe("Contact", () => {
	it("renders the documented UI-only contact form and contact channels", () => {
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

		expect(screen.getByLabelText("Espacio reservado para la verificación CAPTCHA")).toBeVisible();
		expect(screen.getByRole("button", { name: "Enviar solicitud" })).toBeEnabled();
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

	it("prevents submission while the API and CAPTCHA integrations are out of scope", () => {
		render(<Contact />);

		const form = screen.getByRole("button", { name: "Enviar solicitud" }).closest("form");
		expect(form).not.toBeNull();

		const event = new Event("submit", { bubbles: true, cancelable: true });
		form?.dispatchEvent(event);

		expect(event.defaultPrevented).toBe(true);
	});

	it("retains native required-field behavior for the documented mandatory fields", () => {
		render(<Contact />);

		fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: "Ana" } });
		expect(screen.getByLabelText("Nombre")).toHaveValue("Ana");
		expect(screen.getByLabelText("Mensaje")).toBeInvalid();
	});
});
