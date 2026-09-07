import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { contactDetails } from "../../config/contact";
import { navigationItems } from "../../config/navigation";
import { Footer } from "./Footer";

describe("Footer", () => {
	it("renders the approved institutional, contact and navigation content", () => {
		render(<Footer />);

		const footer = screen.getByRole("contentinfo");
		expect(
			within(footer).getByRole("img", { name: "Ancestral Servicios Ambientales" })
		).toBeVisible();
		expect(footer).toHaveTextContent(contactDetails.addressLine);
		expect(within(footer).getByRole("link", { name: contactDetails.phoneDisplay })).toHaveAttribute(
			"href",
			contactDetails.phoneHref
		);
		expect(
			within(footer).getByRole("link", { name: "Escribir a Ancestral por WhatsApp" })
		).toHaveAttribute("href", contactDetails.whatsAppUrl);

		const quickLinks = within(footer).getByRole("navigation", {
			name: "Enlaces rápidos del pie de página",
		});
		for (const item of navigationItems) {
			expect(within(quickLinks).getByRole("link", { name: item.label })).toHaveAttribute(
				"href",
				item.href
			);
		}

		expect(footer).toHaveTextContent("8:00 a.m. - 5:00 p.m.");
		expect(footer).toHaveTextContent("8:00 a.m. - 12:00 m.");
		expect(within(quickLinks).queryByRole("link", { name: "Proyectos" })).not.toBeInTheDocument();
		expect(
			within(quickLinks).queryByRole("link", { name: "Compensaciones" })
		).not.toBeInTheDocument();
	});

	it("routes Home section links back from a service detail page", () => {
		render(<Footer isHomePage={false} />);

		expect(screen.getByRole("link", { name: "Ir al inicio de Ancestral" })).toHaveAttribute(
			"href",
			"/ancestral-landing/#inicio"
		);
		expect(screen.getByRole("link", { name: "Servicios" })).toHaveAttribute(
			"href",
			"/ancestral-landing/#servicios"
		);
	});
});
