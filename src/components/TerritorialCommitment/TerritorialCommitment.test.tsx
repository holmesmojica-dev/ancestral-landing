import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TerritorialCommitment } from "./TerritorialCommitment";

describe("TerritorialCommitment", () => {
	it("presents the approved territorial impact narrative outside the service taxonomy", () => {
		render(<TerritorialCommitment />);

		expect(
			screen.getByRole("region", { name: "Comprometidos con nuestro territorio" })
		).toBeVisible();
		expect(screen.getByText("Nuestra experiencia se construye en el territorio.")).toBeVisible();
		expect(screen.getByText("+1M")).toBeVisible();
		expect(screen.getByText("Árboles sembrados")).toBeVisible();
		expect(screen.getByText("Más que proyectos, acciones que dejan huella.")).toBeVisible();
		expect(
			screen.getByRole("img", { name: "Paisaje con vegetación y un cuerpo de agua" })
		).toHaveAttribute("loading", "lazy");
	});
});
