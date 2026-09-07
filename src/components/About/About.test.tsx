import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { About } from "./About";

describe("About", () => {
	it("renders the approved institutional content and image", () => {
		render(<About />);

		const section = screen.getByRole("region", { name: "¿Quiénes somos?" });

		expect(section).toHaveAttribute("id", "nosotros");
		expect(screen.getByRole("heading", { level: 2, name: "¿Quiénes somos?" })).toBeVisible();
		expect(screen.getByText(/Somos una empresa con más de 10 años de experiencia/)).toBeVisible();
		expect(screen.getByText(/Contamos con viveros propios/)).toBeVisible();
		expect(screen.getByText(/Desde nuestra sede administrativa en Bucaramanga/)).toBeVisible();
		expect(screen.getByText("Comprometidos con el territorio y con el futuro.")).toBeVisible();
		expect(
			screen.getByRole("img", {
				name: "Equipo de Ancestral realizando trabajo ambiental en campo",
			})
		).toHaveAttribute("loading", "lazy");
	});

	it("keeps the mobile reading order coherent", () => {
		const { container } = render(<About />);
		const intro = container.querySelector(".about__intro");
		const visual = container.querySelector(".about__visual");
		const details = container.querySelector(".about__details");

		expect(intro?.nextElementSibling).toBe(visual);
		expect(visual?.nextElementSibling).toBe(details);
	});
});
