import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
	it("exposes an accessible heading and its supporting content", () => {
		render(
			<SectionHeading
				description="Descripción de apoyo"
				eyebrow="Contexto"
				id="titulo"
				title="Título de sección"
			/>
		);

		expect(screen.getByRole("heading", { level: 2, name: "Título de sección" })).toHaveAttribute(
			"id",
			"titulo"
		);
		expect(screen.getByText("Contexto")).toBeInTheDocument();
		expect(screen.getByText("Descripción de apoyo")).toBeInTheDocument();
	});

	it("omits optional supporting content and applies the dark-surface contract", () => {
		const { container } = render(<SectionHeading title="Título independiente" tone="dark" />);

		expect(screen.getByRole("heading", { name: "Título independiente" })).toBeInTheDocument();
		expect(container.querySelector(".section-heading--dark")).toBeInTheDocument();
		expect(container.querySelector("p")).not.toBeInTheDocument();
	});
});
