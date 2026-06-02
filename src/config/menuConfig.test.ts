import { describe, expect, it } from "vitest";
import { MenuItemId, getBaseSectionHref, getMenuSectionId, menuItems } from "./menuConfig";

describe("menuConfig", () => {
	it("should contain menu items", () => {
		expect(menuItems.length).toBeGreaterThan(0);
	});

	it("should generate section id correctly", () => {
		expect(getMenuSectionId(MenuItemId.Home)).toBe("home-section");
	});

	it("should generate href correctly", () => {
		expect(getBaseSectionHref(MenuItemId.Home)).toBe("#home-section");
	});

	it("should contain valid ids and titles", () => {
		menuItems.forEach((item) => {
			expect(item.id).toBeTruthy();
			expect(item.title).toBeTruthy();
		});
	});
});
