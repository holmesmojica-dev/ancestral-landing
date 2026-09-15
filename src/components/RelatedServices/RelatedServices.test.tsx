import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { services } from "../../config/services";
import { RelatedServices } from "./RelatedServices";

describe.each(services)("RelatedServices — $name", (currentService) => {
	it("renders links to exactly the other four canonical services", () => {
		render(
			<MemoryRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
				<RelatedServices currentServiceId={currentService.id} />
			</MemoryRouter>
		);

		const section = screen.getByRole("region", { name: "Otros servicios" });
		const relatedServices = services.filter((service) => service.id !== currentService.id);

		expect(within(section).getAllByRole("listitem")).toHaveLength(4);
		expect(
			within(section).queryByRole("link", { name: currentService.name })
		).not.toBeInTheDocument();

		for (const service of relatedServices) {
			expect(within(section).getByRole("link", { name: service.name })).toHaveAttribute(
				"href",
				service.route
			);
		}
	});
});
