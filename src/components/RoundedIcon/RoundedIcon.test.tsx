import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { MapPin } from "lucide-react";

import RoundedIcon from "./RoundedIcon";
import { ICON_STYLES } from "./RoundedIcon.constants";

describe("RoundedIcon", () => {
	it("should render accent style", () => {
		const { container } = render(<RoundedIcon icon={MapPin} style={ICON_STYLES.ACCENT} />);

		expect(container.querySelector(".c-bg-accent")).toBeInTheDocument();
	});

	it("should render secondary style", () => {
		const { container } = render(<RoundedIcon icon={MapPin} style={ICON_STYLES.SECONDARY} />);

		expect(container.querySelector(".c-bg-secondary")).toBeInTheDocument();
	});
});
