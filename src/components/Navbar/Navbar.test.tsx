import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
	it("should render navigation element", () => {
		render(<Navbar />);

		expect(screen.getByRole("navigation")).toBeInTheDocument();
	});

	it("should render menu items", () => {
		render(<Navbar />);

		expect(screen.getByText("INICIO")).toBeInTheDocument();

		expect(screen.getByText("NOSOTROS")).toBeInTheDocument();

		expect(screen.getByText("SERVICIOS")).toBeInTheDocument();
	});

	it("should render navigation links", () => {
		render(<Navbar />);

		expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
	});
});
