import "@testing-library/jest-dom";
import { vi } from "vitest";

class MockIntersectionObserver {
	observe = vi.fn();
	unobserve = vi.fn();
	disconnect = vi.fn();
}

Object.defineProperty(globalThis, "IntersectionObserver", {
	writable: true,
	value: MockIntersectionObserver,
});

HTMLDialogElement.prototype.showModal = function () {
	this.open = true;
};

HTMLDialogElement.prototype.close = function () {
	this.open = false;
};
