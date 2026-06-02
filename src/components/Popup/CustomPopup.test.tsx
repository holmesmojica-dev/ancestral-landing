import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import CustomPopup from "./CustomPopup";

describe("CustomPopup", () => {
	it("should render title when opened", () => {
		render(
			<CustomPopup isOpen={true} title="Test Popup" onClose={() => {}}>
				Content
			</CustomPopup>
		);

		expect(screen.getByText("Test Popup")).toBeInTheDocument();
	});

	it("should render children content", () => {
		render(
			<CustomPopup isOpen={true} title="Test Popup" onClose={() => {}}>
				Content
			</CustomPopup>
		);

		expect(screen.getByText("Content")).toBeInTheDocument();
	});

	it("should call onClose when close button is clicked", async () => {
		const user = userEvent.setup();
		const onClose = vi.fn();

		render(
			<CustomPopup isOpen={true} title="Test Popup" onClose={onClose}>
				Content
			</CustomPopup>
		);

		await user.click(
			screen.getByRole("button", {
				name: /close popup/i,
			})
		);

		expect(onClose).toHaveBeenCalledOnce();
	});
});
