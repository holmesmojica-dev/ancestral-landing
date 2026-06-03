import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import OurServices from "./OurServices";
import { servicesData } from "../../config/servicesConfig";

describe("OurServices", () => {
	it("should render section titles", () => {
		render(<OurServices id="our-services-section" />);

		expect(screen.getByText("Nuestros servicios")).toBeInTheDocument();

		expect(
			screen.getByText("Soluciones ambientales adaptadas a tus necesidades")
		).toBeInTheDocument();
	});

	it("should render all configured services", () => {
		render(<OurServices id="our-services-section" />);

		servicesData.forEach((service) => {
			expect(screen.getByText(service.title)).toBeInTheDocument();
		});
	});

	it("should render one button per service", () => {
		render(<OurServices id="our-services-section" />);

		const buttons = screen.getAllByRole("button");

		expect(buttons.length).toBe(servicesData.length);
	});
});
