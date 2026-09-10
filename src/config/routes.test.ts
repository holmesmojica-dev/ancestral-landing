import { describe, expect, it } from "vitest";

import { createBaseAwarePath } from "./routes";

describe("base-aware application paths", () => {
	it("preserves logical application paths for root deployments", () => {
		expect(createBaseAwarePath("/", "/")).toBe("/");
		expect(createBaseAwarePath("/servicios/ambientales", "/")).toBe("/servicios/ambientales");
		expect(createBaseAwarePath("/#servicios", "/")).toBe("/#servicios");
	});

	it("prefixes internal paths for subpath deployments", () => {
		const baseUrl = "/ancestral-landing/";

		expect(createBaseAwarePath("/", baseUrl)).toBe("/ancestral-landing/");
		expect(createBaseAwarePath("/servicios/ambientales", baseUrl)).toBe(
			"/ancestral-landing/servicios/ambientales"
		);
		expect(createBaseAwarePath("/404", baseUrl)).toBe("/ancestral-landing/404");
		expect(createBaseAwarePath("/#servicios", baseUrl)).toBe("/ancestral-landing/#servicios");
	});

	it("does not duplicate an existing subpath prefix", () => {
		expect(
			createBaseAwarePath("/ancestral-landing/servicios/ambientales", "/ancestral-landing/")
		).toBe("/ancestral-landing/servicios/ambientales");
	});
});
