import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { trustedEntities } from "../../config/trusted-entities";
import { TrustedEntities } from "./TrustedEntities";

describe("TrustedEntities", () => {
	it("renders only the five approved partner assets as non-interactive logos", () => {
		render(<TrustedEntities />);

		expect(
			screen.getByRole("region", { name: "Entidades que han confiado en nosotros" })
		).toBeVisible();

		for (const entity of trustedEntities) {
			expect(screen.getByRole("img", { name: entity.name })).toHaveAttribute("src", entity.logo);
		}

		expect(screen.getAllByRole("listitem")).toHaveLength(5);
		expect(screen.queryByRole("link")).not.toBeInTheDocument();
	});
});
