import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("./components/Header/Header", () => ({
	default: () => <div>Header</div>,
}));

vi.mock("./components/Footer/Footer", () => ({
	default: () => <div>Footer</div>,
}));

vi.mock("./pages/Home/Home", () => ({
	default: () => <div>Home</div>,
}));

describe("App", () => {
	it("should render application layout", () => {
		render(<App />);

		expect(screen.getByText("Header")).toBeInTheDocument();
		expect(screen.getByText("Home")).toBeInTheDocument();
		expect(screen.getByText("Footer")).toBeInTheDocument();
	});
});
