import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MapPin } from "lucide-react";

import ContactWidget from "./ContactWidget";

vi.mock("../RoundedIcon/RoundedIcon", () => ({
	default: () => <div data-testid="rounded-icon" />,
}));

describe("ContactWidget", () => {
	it("should render title", () => {
		render(<ContactWidget title="Ubicación" description="Calle 54 # 22-12" widgetIcon={MapPin} />);

		expect(screen.getByText("Ubicación")).toBeInTheDocument();
	});

	it("should render description", () => {
		render(<ContactWidget title="Ubicación" description="Calle 54 # 22-12" widgetIcon={MapPin} />);

		expect(screen.getByText("Calle 54 # 22-12")).toBeInTheDocument();
	});

	it("should render rounded icon", () => {
		render(<ContactWidget title="Ubicación" description="Calle 54 # 22-12" widgetIcon={MapPin} />);

		expect(screen.getByTestId("rounded-icon")).toBeInTheDocument();
	});
});
