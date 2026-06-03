import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import ContactUs from "./ContactUs";

vi.mock("../../components/RoundedIcon/RoundedIcon", () => ({
	default: () => <div data-testid="rounded-icon" />,
}));

describe("ContactUs", () => {
	it("should render section title", () => {
		render(<ContactUs id="contact-us-section" />);

		expect(screen.getByText("Solicita un servicio")).toBeInTheDocument();

		expect(screen.getByText("Listo para conectar con nosotros?")).toBeInTheDocument();
	});

	it("should render contact form", () => {
		render(<ContactUs id="contact-us-section" />);

		expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();

		expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();

		expect(screen.getByPlaceholderText("Teléfono")).toBeInTheDocument();

		expect(screen.getByPlaceholderText("Detalles adicionales")).toBeInTheDocument();
	});

	it("should render submit button and icon", () => {
		render(<ContactUs id="contact-us-section" />);

		expect(screen.getByText("Enviar")).toBeInTheDocument();

		expect(screen.getByTestId("rounded-icon")).toBeInTheDocument();
	});
});
