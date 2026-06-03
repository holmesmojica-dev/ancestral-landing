import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import WhyUs from "./WhyUs";

vi.mock("../../components/RoundedIcon/RoundedIcon", () => ({
	default: () => <div data-testid="rounded-icon" />,
}));

describe("WhyUs", () => {
	it("should render section titles", () => {
		render(<WhyUs id="why-us-section" />);

		expect(screen.getByText("Por qué Ancestral?")).toBeInTheDocument();

		expect(screen.getByText("Compromiso Sostenible y Soluciones Certificadas")).toBeInTheDocument();
	});

	it("should render certifications", () => {
		render(<WhyUs id="why-us-section" />);

		expect(screen.getByText(/registro oficial como productor/i)).toBeInTheDocument();

		expect(screen.getByText(/registro único de comercializadores/i)).toBeInTheDocument();
	});

	it("should render feature cards", () => {
		render(<WhyUs id="why-us-section" />);

		expect(screen.getByText("Experiencia")).toBeInTheDocument();

		expect(screen.getByText("Compromiso Ambiental")).toBeInTheDocument();

		expect(screen.getByText("Proyectos Personalizados")).toBeInTheDocument();

		expect(screen.getAllByTestId("rounded-icon")).toHaveLength(3);
	});
});
