import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "./Home";

vi.mock("../../config/menuConfig", () => ({
	menuItems: [
		{
			id: "home",
			section: ({ id }: { id: string }) => (
				<section data-testid="section-home" id={id}>
					Home Section
				</section>
			),
		},
		{
			id: "about",
			section: ({ id }: { id: string }) => (
				<section data-testid="section-about" id={id}>
					About Section
				</section>
			),
		},
	],
	getMenuSectionId: (id: string) => `${id}-section`,
}));

describe("Home", () => {
	it("should render all configured sections", () => {
		render(<Home />);

		expect(screen.getByTestId("section-home")).toBeInTheDocument();
		expect(screen.getByTestId("section-about")).toBeInTheDocument();
	});

	it("should pass generated section ids", () => {
		render(<Home />);

		expect(screen.getByTestId("section-home")).toHaveAttribute("id", "home-section");

		expect(screen.getByTestId("section-about")).toHaveAttribute("id", "about-section");
	});
});
