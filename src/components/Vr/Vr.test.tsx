import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import Vr from "./Vr";

describe("Vr", () => {
	it("should render without className", () => {
		const { container } = render(<Vr />);

		expect(container.querySelector(".vr")).toBeInTheDocument();
	});

	it("should apply custom className", () => {
		const { container } = render(<Vr className="custom-class" />);

		expect(container.querySelector(".custom-class")).toBeInTheDocument();
	});
});
