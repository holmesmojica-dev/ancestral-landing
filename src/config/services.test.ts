import { describe, expect, it } from "vitest";

import { services } from "./services";

describe("services", () => {
	it("contains exactly the five canonical V2 service categories", () => {
		expect(services.map(({ name }) => name)).toEqual([
			"Servicios Ambientales",
			"Servicios Forestales",
			"Servicios Agrícolas",
			"Manejo del Recurso Hídrico",
			"Seguridad y Salud en el Trabajo",
		]);
	});

	it("does not model environmental compensation as a service", () => {
		expect(services).toHaveLength(5);
		expect(services.some(({ id }) => id.includes("compensation"))).toBe(false);
	});

	it("associates every service with a stable route and supplied asset variants", () => {
		for (const service of services) {
			expect(service.route).toBe(`/servicios/${service.slug}`);
			expect(service.description.length).toBeGreaterThan(0);
			expect(service.image).toMatch(/\.webp$/);
			expect(Object.values(service.icons)).toHaveLength(4);
			expect(Object.values(service.icons).every((icon) => icon.endsWith(".png"))).toBe(true);
			expect(service.detail.heroCopy.length).toBeGreaterThan(0);
			expect(service.detail.valueProposition.length).toBeGreaterThan(0);
			expect(service.detail.capabilities.length).toBeGreaterThan(0);
			expect(service.detail.gallery.length).toBeGreaterThan(0);
			expect(service.detail.contact.heading.length).toBeGreaterThan(0);
		}
	});
});
