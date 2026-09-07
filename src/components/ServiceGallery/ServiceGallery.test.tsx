import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import type { ServiceGalleryImage } from "../../types/service";
import { ServiceGallery } from "./ServiceGallery";

const galleryImages = [
	{
		src: "/images/first.webp",
		alt: "Primera experiencia en campo",
		caption: "Primera imagen del trabajo en territorio.",
		width: 1600,
		height: 1200,
	},
	{
		src: "/images/second.webp",
		alt: "Segunda experiencia en campo",
		caption: "Segunda imagen del trabajo en territorio.",
		width: 1800,
		height: 1200,
	},
	{
		src: "/images/third.webp",
		alt: "Tercera experiencia en campo",
		caption: "Tercera imagen del trabajo en territorio.",
		width: 1400,
		height: 1050,
	},
] as const satisfies readonly ServiceGalleryImage[];

function getSlides() {
	return screen.getAllByRole("listitem", { hidden: true });
}

describe("ServiceGallery", () => {
	it("renders configuration data with the first image active initially", () => {
		render(<ServiceGallery images={galleryImages} />);

		const slides = getSlides();
		expect(slides).toHaveLength(galleryImages.length);
		expect(slides[0]).not.toHaveAttribute("hidden");
		expect(slides[1]).toHaveAttribute("hidden");
		expect(slides[2]).toHaveAttribute("hidden");
		expect(screen.getByRole("img", { name: galleryImages[0].alt })).toBeVisible();
		expect(screen.getByText(galleryImages[0].caption)).toBeVisible();
	});

	it("moves forward and backward through the configured images", async () => {
		const user = userEvent.setup();
		render(<ServiceGallery images={galleryImages} />);

		await user.click(screen.getByRole("button", { name: "Mostrar imagen siguiente" }));
		expect(getSlides()[1]).not.toHaveAttribute("hidden");
		expect(screen.getByRole("img", { name: galleryImages[1].alt })).toBeVisible();

		await user.click(screen.getByRole("button", { name: "Mostrar imagen anterior" }));
		expect(getSlides()[0]).not.toHaveAttribute("hidden");
		expect(screen.getByRole("img", { name: galleryImages[0].alt })).toBeVisible();
	});

	it("uses interactive indicators to select and communicate the active image", async () => {
		const user = userEvent.setup();
		render(<ServiceGallery images={galleryImages} />);

		const indicatorGroup = screen.getByRole("generic", { name: "Seleccionar imagen" });
		const indicators = within(indicatorGroup).getAllByRole("button");
		expect(indicators[0]).toHaveAttribute("aria-current", "true");

		await user.click(indicators[2]);

		expect(indicators[0]).not.toHaveAttribute("aria-current");
		expect(indicators[2]).toHaveAttribute("aria-current", "true");
		expect(screen.getByText(galleryImages[2].caption)).toBeVisible();
		expect(getSlides().filter((slide) => !slide.hasAttribute("hidden"))).toHaveLength(1);
	});

	it("omits navigation controls for a one-image gallery", () => {
		render(<ServiceGallery images={[galleryImages[0]]} />);

		expect(screen.getByRole("img", { name: galleryImages[0].alt })).toBeVisible();
		expect(
			screen.queryByRole("button", { name: "Mostrar imagen anterior" })
		).not.toBeInTheDocument();
		expect(
			screen.queryByRole("button", { name: "Mostrar imagen siguiente" })
		).not.toBeInTheDocument();
		expect(screen.queryByRole("generic", { name: "Seleccionar imagen" })).not.toBeInTheDocument();
	});
});
