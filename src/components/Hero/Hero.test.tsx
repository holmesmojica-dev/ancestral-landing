import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Hero } from "./Hero";

describe("Hero", () => {
	it("presents the approved value proposition and section destinations", () => {
		render(<Hero />);

		const hero = screen.getByRole("region", {
			name: "Transformamos entornos, generamos vida.",
		});

		expect(hero).toHaveAttribute("id", "inicio");
		expect(within(hero).getByRole("heading", { level: 1 })).toHaveTextContent(
			"Transformamos entornos, generamos vida."
		);
		expect(within(hero).getByRole("link", { name: "Nuestros servicios" })).toHaveAttribute(
			"href",
			"#servicios"
		);
		expect(within(hero).getByRole("link", { name: "Conócenos" })).toHaveAttribute(
			"href",
			"#contacto"
		);
		expect(
			within(hero).getByRole("img", {
				name: "Personas trabajando en un vivero de material vegetal",
			})
		).toHaveAttribute("loading", "eager");
	});
});
