import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("React Testing Library", () => {
	it("should render content correctly", () => {
		render(<button>Click me</button>);

		expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
	});
});
