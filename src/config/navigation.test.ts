import { describe, expect, it } from "vitest";

import { navigationItems } from "./navigation";

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
