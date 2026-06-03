import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import AboutUs from "./AboutUs";

describe("AboutUs", () => {
	it("should render section content", () => {
		render(<AboutUs id="about-us-section" />);

		expect(screen.getByText("Acerca de Ancestral")).toBeInTheDocument();

		expect(screen.getByText("Proveemos servicios ambientales con experiencia")).toBeInTheDocument();

		expect(screen.getByText(/Ancestral es una empresa/i)).toBeInTheDocument();
	});

	it("should render service list", () => {
		render(<AboutUs id="about-us-section" />);

		expect(screen.getByText("Proyectos ambientales")).toBeInTheDocument();
		expect(screen.getByText("Inventarios forestales")).toBeInTheDocument();
		expect(screen.getByText("Obras agrícolas")).toBeInTheDocument();
		expect(screen.getByText("Seguridad y salud")).toBeInTheDocument();
	});

	it("should render completed projects widget", () => {
		render(<AboutUs id="about-us-section" />);

		expect(screen.getByText("1000")).toBeInTheDocument();

		expect(screen.getByText("Proyectos completados")).toBeInTheDocument();
	});
});
