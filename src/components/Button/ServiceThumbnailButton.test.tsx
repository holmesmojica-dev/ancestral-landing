import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import ServiceThumbnailButton from "./ServiceThumbnailButton";

const MockIcon = () => <svg data-testid="mock-icon" />;

describe("ServiceThumbnailButton", () => {
	it("should render title", () => {
		render(<ServiceThumbnailButton title="Ambientales" btnIcon={MockIcon} />);

		expect(screen.getByText("Ambientales")).toBeInTheDocument();
	});

	it("should render icon", () => {
		render(<ServiceThumbnailButton title="Ambientales" btnIcon={MockIcon} />);

		expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
	});

	it("should invoke click handler", () => {
		const handleClick = vi.fn();

		render(<ServiceThumbnailButton title="Ambientales" btnIcon={MockIcon} onClick={handleClick} />);

		fireEvent.click(screen.getByRole("button"));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
