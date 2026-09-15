import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { services } from "../../config/services";
import { Services } from "./Services";

describe("Services", () => {
	it("renders the five canonical services as links to their reserved routes", () => {
		render(
			<MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
				<Services />
			</MemoryRouter>
		);

		expect(screen.getByRole("region", { name: "Nuestros servicios" })).toHaveAttribute(
			"id",
			"servicios"
		);

		for (const service of services) {
			const serviceLink = screen.getByRole("link", { name: service.name });

			expect(serviceLink).toHaveAttribute("href", service.route);
			expect(serviceLink).toHaveAccessibleDescription(service.description);
			expect(screen.getByText(service.description)).toBeVisible();
		}

		expect(screen.getAllByRole("listitem")).toHaveLength(5);
		expect(screen.queryByText(/Compensaciones/i)).not.toBeInTheDocument();
	});
});
