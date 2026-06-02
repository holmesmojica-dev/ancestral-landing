import "@testing-library/jest-dom";

class MockIntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
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
