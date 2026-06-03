import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

vi.mock("../Button/NetworkButtons", () => ({
	default: () => <div data-testid="network-buttons" />,
}));

describe("Footer", () => {
	it("should render contact information", () => {
		render(<Footer />);

		expect(screen.getByText("Información de contacto")).toBeInTheDocument();
		expect(screen.getByText("Calle 54 # 22-12")).toBeInTheDocument();
		expect(screen.getByText("info@ancestral.com")).toBeInTheDocument();
		expect(screen.getByText("316 411 4933")).toBeInTheDocument();
	});

	it("should render social network buttons", () => {
		render(<Footer />);

		expect(screen.getByTestId("network-buttons")).toBeInTheDocument();
	});

	it("should render copyright", () => {
		render(<Footer />);

		expect(
			screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`))
		).toBeInTheDocument();
	});
});
