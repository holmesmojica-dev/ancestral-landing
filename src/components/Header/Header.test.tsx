import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { navigationItems, serviceDetailNavigationItems } from "../../config/navigation";
import { Header } from "./Header";

const intersectionObservers: IntersectionObserverMock[] = [];

class IntersectionObserverMock implements IntersectionObserver {
	readonly root: Element | Document | null;
	readonly rootMargin: string;
	readonly thresholds: readonly number[];
	readonly observedElements: Element[] = [];
	disconnected = false;

	constructor(
		private readonly callback: IntersectionObserverCallback,
		options?: IntersectionObserverInit
	) {
		this.root = options?.root ?? null;
		this.rootMargin = options?.rootMargin ?? "0px";
		this.thresholds = Array.isArray(options?.threshold)
			? options.threshold
			: [options?.threshold ?? 0];
		intersectionObservers.push(this);
	}

	disconnect() {
		this.disconnected = true;
	}

	observe(target: Element) {
		this.observedElements.push(target);
	}

	takeRecords() {
		return [];
	}

	trigger(entries: IntersectionObserverEntry[]) {
		this.callback(entries, this);
	}

	unobserve(target: Element) {
		const index = this.observedElements.indexOf(target);

		if (index >= 0) {
			this.observedElements.splice(index, 1);
		}
	}
}

function createIntersectionEntry(
	target: Element,
	isIntersecting: boolean,
	top: number
): IntersectionObserverEntry {
	const bounds = { top } as DOMRectReadOnly;

	return {
		boundingClientRect: bounds,
		intersectionRatio: isIntersecting ? 0.5 : 0,
		intersectionRect: bounds,
		isIntersecting,
		rootBounds: null,
		target,
		time: 0,
	};
}

describe("Header", () => {
	beforeEach(() => {
		intersectionObservers.length = 0;
		vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it("renders the canonical navigation and the differentiated WhatsApp action", () => {
		render(<Header />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Ir al inicio de Ancestral" })).toHaveAttribute(
			"href",
			"#inicio"
		);

		const navigation = screen.getByRole("navigation", { name: "Navegación principal" });

		for (const item of navigationItems) {
			expect(within(navigation).getByRole("link", { name: item.label })).toHaveAttribute(
				"href",
				item.href
			);
		}

		expect(within(navigation).getByRole("link", { name: "Inicio" })).toHaveAttribute(
			"aria-current",
			"location"
		);
		expect(within(navigation).getByRole("link", { name: "Hablemos por WhatsApp" })).toHaveAttribute(
			"href",
			"https://wa.me/573164114933"
		);
	});

	it("tracks the visible section with exactly one current navigation item", () => {
		const { unmount } = render(
			<>
				<Header />
				{navigationItems.map((item) => (
					<section id={item.id} key={item.id} />
				))}
			</>
		);
		const navigation = screen.getByRole("navigation", { name: "Navegación principal" });
		const observer = intersectionObservers[intersectionObservers.length - 1];

		expect(observer?.observedElements).toHaveLength(navigationItems.length);
		expect(observer?.rootMargin).toBe("-80px 0px -70% 0px");
		expect(within(navigation).getByRole("link", { name: "Inicio" })).toHaveAttribute(
			"aria-current",
			"location"
		);

		const hero = document.getElementById("inicio");
		const about = document.getElementById("nosotros");

		expect(hero).not.toBeNull();
		expect(about).not.toBeNull();

		act(() => {
			observer?.trigger([
				createIntersectionEntry(hero as Element, true, -400),
				createIntersectionEntry(about as Element, true, 80),
			]);
		});

		const currentLinks = within(navigation)
			.getAllByRole("link")
			.filter((link) => link.hasAttribute("aria-current"));

		expect(currentLinks).toHaveLength(1);
		expect(currentLinks[0]).toHaveAccessibleName("Nosotros");
		expect(currentLinks[0]).toHaveAttribute("aria-current", "location");

		unmount();
		expect(observer?.disconnected).toBe(true);
	});

	it("renders the contextual Service Detail navigation with local section targets", () => {
		render(<Header isHomePage={false} />);

		const navigation = screen.getByRole("navigation", { name: "Navegación principal" });

		for (const item of serviceDetailNavigationItems) {
			expect(within(navigation).getByRole("link", { name: item.label })).toHaveAttribute(
				"href",
				item.href
			);
		}

		expect(within(navigation).getByRole("link", { name: "Servicio" })).toHaveAttribute(
			"aria-current",
			"location"
		);
		expect(within(navigation).queryByRole("link", { name: "Inicio" })).not.toBeInTheDocument();
		expect(within(navigation).queryByRole("link", { name: "Nosotros" })).not.toBeInTheDocument();
		expect(within(navigation).queryByRole("link", { name: "Servicios" })).not.toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Ir al inicio de Ancestral" })).toHaveAttribute(
			"href",
			"/#inicio"
		);
	});

	it("tracks the visible Service Detail section with the contextual navigation", () => {
		const { unmount } = render(
			<>
				<Header isHomePage={false} />
				{serviceDetailNavigationItems.map((item) => (
					<section id={item.id} key={item.id} />
				))}
			</>
		);
		const navigation = screen.getByRole("navigation", { name: "Navegación principal" });
		const observer = intersectionObservers[intersectionObservers.length - 1];

		expect(observer?.observedElements).toHaveLength(serviceDetailNavigationItems.length);
		expect(observer?.rootMargin).toBe("-120px 0px -70% 0px");
		expect(within(navigation).getByRole("link", { name: "Servicio" })).toHaveAttribute(
			"aria-current",
			"location"
		);

		const hero = document.getElementById("servicio");
		const capabilities = document.getElementById("capacidades");

		expect(hero).not.toBeNull();
		expect(capabilities).not.toBeNull();

		act(() => {
			observer?.trigger([
				createIntersectionEntry(hero as Element, true, -400),
				createIntersectionEntry(capabilities as Element, true, 120),
			]);
		});

		const currentLinks = within(navigation)
			.getAllByRole("link")
			.filter((link) => link.hasAttribute("aria-current"));

		expect(currentLinks).toHaveLength(1);
		expect(currentLinks[0]).toHaveAccessibleName("Capacidades");
		expect(currentLinks[0]).toHaveAttribute("aria-current", "location");

		unmount();
		expect(observer?.disconnected).toBe(true);
	});

	it("opens and closes the compact navigation accessibly", async () => {
		const user = userEvent.setup();
		render(<Header />);

		const openButton = screen.getByRole("button", { name: "Abrir menú" });

		expect(openButton).toHaveAttribute("aria-expanded", "false");

		await user.click(openButton);

		const closeButton = screen.getByRole("button", { name: "Cerrar menú" });
		expect(closeButton).toHaveAttribute("aria-expanded", "true");
		expect(screen.getByRole("navigation", { name: "Navegación principal" })).toHaveClass(
			"site-header__navigation--open"
		);

		await user.keyboard("a");
		expect(closeButton).toHaveAttribute("aria-expanded", "true");

		await user.keyboard("{Escape}");

		expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveFocus();
		expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
			"aria-expanded",
			"false"
		);

		await user.click(screen.getByRole("button", { name: "Abrir menú" }));
		await user.click(screen.getByRole("button", { name: "Cerrar menú" }));

		expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
			"aria-expanded",
			"false"
		);
	});

	it("closes the compact navigation after navigation or viewport changes", async () => {
		const user = userEvent.setup();
		render(<Header />);

		await user.click(screen.getByRole("button", { name: "Abrir menú" }));
		await user.click(screen.getByRole("link", { name: "Nosotros" }));

		expect(screen.getByRole("link", { name: "Nosotros" })).toHaveAttribute(
			"aria-current",
			"location"
		);
		expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
			"aria-expanded",
			"false"
		);

		await user.click(screen.getByRole("button", { name: "Abrir menú" }));
		fireEvent.resize(window);

		await waitFor(() =>
			expect(screen.getByRole("button", { name: "Abrir menú" })).toHaveAttribute(
				"aria-expanded",
				"false"
			)
		);
	});
});
