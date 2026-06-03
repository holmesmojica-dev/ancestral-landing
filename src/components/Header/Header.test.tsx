import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";

vi.mock("../Navbar/Navbar", () => ({
	default: () => <div data-testid="navbar">Navbar</div>,
}));

vi.mock("../ContactWidget/ContactWidget", () => ({
	default: ({ title, description }: { title: string; description: string }) => (
		<div>
			<span>{title}</span>
			<span>{description}</span>
		</div>
	),
}));

vi.mock("../Vr/Vr", () => ({
	default: () => <div data-testid="vr" />,
}));

describe("Header", () => {
	it("should render contact information", () => {
		render(<Header />);

		expect(screen.getByText("Ubicación")).toBeInTheDocument();
		expect(screen.getByText("Calle 54 # 22-12")).toBeInTheDocument();

		expect(screen.getByText("Llámanos")).toBeInTheDocument();
		expect(screen.getByText("316 411 4933")).toBeInTheDocument();

		expect(screen.getByText("Agenda una cita")).toBeInTheDocument();
	});

	it("should not hide content on initial render", () => {
		const { container } = render(<Header />);

		expect(container.querySelector(".hide-content")).not.toBeInTheDocument();
	});

	it("should hide content when page is scrolled", () => {
		Object.defineProperty(window, "scrollY", {
			value: 200,
			writable: true,
		});

		const { container } = render(<Header />);

		fireEvent.scroll(window);

		expect(container.querySelector(".hide-content")).toBeInTheDocument();
	});
});
