import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandLogo } from "./BrandLogo";

describe("BrandLogo", () => {
	it("uses the supplied full brand asset by default", () => {
		render(<BrandLogo />);

		const logo = screen.getByRole("img", { name: "Ancestral Servicios Ambientales" });

		expect(logo).toHaveAttribute("src", expect.stringContaining("ancestral-logo"));
	});

	it("supports the supplied inverse symbol asset", () => {
		render(<BrandLogo alt="Ancestral" symbolOnly variant="inverse" />);

		const logo = screen.getByRole("img", { name: "Ancestral" });

		expect(logo).toHaveAttribute("src", expect.stringContaining("ancestral-symbol-white"));
	});
});
