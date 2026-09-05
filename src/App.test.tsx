import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
	it("renders the accessible V2 foundation shell", () => {
		render(<App />);

		expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
		expect(
			screen.getByRole("heading", {
				level: 1,
				name: "La nueva experiencia de Ancestral está en camino.",
			})
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Saltar al contenido principal" })).toHaveAttribute(
			"href",
			"#main-content"
		);
		expect(screen.getByRole("img", { name: "Ancestral Servicios Ambientales" })).toBeVisible();
	});
});
