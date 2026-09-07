import { describe, expect, it } from "vitest";

import { navigationItems, serviceDetailNavigationItems } from "./navigation";

describe("navigationItems", () => {
	it("contains the canonical V2 navigation in the approved order", () => {
		expect(navigationItems).toEqual([
			{ id: "inicio", label: "Inicio", href: "#inicio" },
			{ id: "nosotros", label: "Nosotros", href: "#nosotros" },
			{ id: "servicios", label: "Servicios", href: "#servicios" },
			{ id: "contacto", label: "Contacto", href: "#contacto" },
		]);
	});

	it("keeps navigation identifiers and destinations unique", () => {
		expect(new Set(navigationItems.map(({ id }) => id)).size).toBe(navigationItems.length);
		expect(new Set(navigationItems.map(({ href }) => href)).size).toBe(navigationItems.length);
	});
});

describe("serviceDetailNavigationItems", () => {
	it("defines the contextual navigation for existing Service Detail sections", () => {
		expect(serviceDetailNavigationItems).toEqual([
			{ id: "servicio", label: "Servicio", href: "#servicio" },
			{ id: "capacidades", label: "Capacidades", href: "#capacidades" },
			{ id: "territorio", label: "Territorio", href: "#territorio" },
			{ id: "experiencia", label: "Experiencia", href: "#experiencia" },
			{ id: "contacto", label: "Contacto", href: "#contacto" },
		]);
	});
});
