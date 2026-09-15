import { describe, expect, it } from "vitest";

import { normalizeApiBaseUrl } from "./api";

describe("normalizeApiBaseUrl", () => {
	it.each([
		[undefined, null],
		["", null],
		["not-a-url", null],
		["ftp://api.ancestral-col.com", null],
		["https://user:password@api.ancestral-col.com", null],
		["https://api.ancestral-col.com/api", null],
		["https://api.ancestral-col.com?debug=true", null],
		["https://api.ancestral-col.com#debug", null],
		[" https://api.ancestral-col.com/ ", "https://api.ancestral-col.com"],
		["http://localhost:8080", "http://localhost:8080"],
	] as const)("normalizes %s safely", (value, expected) => {
		expect(normalizeApiBaseUrl(value)).toBe(expected);
	});
});
