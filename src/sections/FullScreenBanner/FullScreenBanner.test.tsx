import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";

import FullScreenBanner from "./FullScreenBanner";
import { servicesData } from "../../config/servicesConfig";

vi.mock("../../components/Button/ServiceThumbnailButton", () => ({
	default: ({ title, onClick }: { title: string; onClick: () => void }) => (
		<button onClick={onClick} data-testid="service-thumbnail">
			{title}
		</button>
	),
}));

vi.mock("../../components/Popup/CustomPopup", () => ({
	default: ({
		isOpen,
		title,
		children,
		onClose,
	}: {
		isOpen: boolean;
		title: string;
		children: React.ReactNode;
		onClose: () => void;
	}) =>
		isOpen ? (
			<div data-testid="popup">
				<h2>{title}</h2>
				<button onClick={onClose}>Close Popup</button>
				{children}
			</div>
		) : null,
}));

describe("FullScreenBanner", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.clearAllTimers();
		vi.useRealTimers();
	});

	it("should render banner content", () => {
		render(<FullScreenBanner id="home-section" />);

		expect(screen.getByText(/Ancestral/i)).toBeInTheDocument();

		expect(screen.getByText(/Con más de 10 años de experiencia/i)).toBeInTheDocument();
	});

	it("should render one button per configured service", () => {
		render(<FullScreenBanner id="home-section" />);

		const buttons = screen.getAllByTestId("service-thumbnail");

		expect(buttons).toHaveLength(servicesData.length);
	});

	it("should open popup when service is clicked", () => {
		render(<FullScreenBanner id="home-section" />);

		fireEvent.click(screen.getAllByTestId("service-thumbnail")[0]);

		expect(screen.getByTestId("popup")).toBeInTheDocument();
	});

	it("should close popup", () => {
		render(<FullScreenBanner id="home-section" />);

		fireEvent.click(screen.getAllByTestId("service-thumbnail")[0]);

		fireEvent.click(screen.getByText("Close Popup"));

		expect(screen.queryByTestId("popup")).not.toBeInTheDocument();
	});

	it("should rotate banner images", () => {
		const { container } = render(<FullScreenBanner id="home-section" />);

		const before = container.querySelectorAll(".banner-image.active");

		expect(before.length).toBe(1);

		act(() => {
			vi.advanceTimersByTime(6000);
		});

		const after = container.querySelectorAll(".banner-image.active");

		expect(after.length).toBe(1);
	});
});
