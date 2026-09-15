import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ActionLink } from "./ActionLink";

describe("ActionLink", () => {
	it("renders a semantic link with the requested visual contract", () => {
		render(
			<ActionLink href="#contenido" size="large" variant="secondary">
				Ir al contenido
			</ActionLink>
		);

		const link = screen.getByRole("link", { name: "Ir al contenido" });

		expect(link).toHaveAttribute("href", "#contenido");
		expect(link).toHaveClass("action-link--large", "action-link--secondary");
	});
});
