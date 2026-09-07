import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ExperienceIndicators } from "./ExperienceIndicators";

describe("ExperienceIndicators", () => {
	it("renders the four approved proof points as a semantic list", () => {
		render(<ExperienceIndicators />);

		const section = screen.getByRole("region", { name: "Experiencia y alcance de Ancestral" });
		const items = within(section).getAllByRole("listitem");

		expect(items).toHaveLength(4);
		expect(items[0]).toHaveTextContent("+10Años de experiencia");
		expect(items[1]).toHaveTextContent("+1MÁrboles sembrados");
		expect(items[2]).toHaveTextContent("SectorPrivado y público");
		expect(items[3]).toHaveTextContent("OrienteColombiano");
		expect(section.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(4);
	});
});
