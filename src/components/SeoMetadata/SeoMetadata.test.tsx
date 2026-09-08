import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { Link, MemoryRouter, Route, Routes } from "react-router-dom";

import { services } from "../../config/services";
import { SeoMetadata } from "./SeoMetadata";

function getMetaContent(selector: string) {
	return document.head.querySelector<HTMLMetaElement>(selector)?.content;
}

afterEach(() => {
	document.head.innerHTML = "";
});

describe("SeoMetadata", () => {
	it("applies complete route metadata and updates it during client navigation", async () => {
		const user = userEvent.setup();
		const service = services[0];

		render(
			<MemoryRouter
				future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
				initialEntries={["/"]}
			>
				<SeoMetadata />
				<Routes>
					<Route element={<Link to={service.route}>Ver servicio</Link>} path="/" />
					<Route element={<p>{service.name}</p>} path={service.route} />
				</Routes>
			</MemoryRouter>
		);

		await waitFor(() => {
			expect(document.title).toBe("Ancestral | Servicios Ambientales en Colombia");
		});
		expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
			"href",
			"https://ancestral-col.com/"
		);

		await user.click(screen.getByRole("link", { name: "Ver servicio" }));

		await waitFor(() => {
			expect(document.title).toBe(service.seo.title);
		});
		expect(getMetaContent('meta[name="description"]')).toBe(service.seo.description);
		expect(getMetaContent('meta[name="robots"]')).toBe("index,follow");
		expect(getMetaContent('meta[property="og:url"]')).toBe(
			"https://ancestral-col.com/servicios/ambientales"
		);
		expect(getMetaContent('meta[name="twitter:card"]')).toBe("summary_large_image");
		expect(document.getElementById("seo-structured-data")?.textContent).toContain(
			'"@type":"Service"'
		);
	});

	it("removes metadata inherited from a valid route when navigating to an unknown route", async () => {
		const user = userEvent.setup();

		render(
			<MemoryRouter
				future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
				initialEntries={["/"]}
			>
				<SeoMetadata />
				<Routes>
					<Route element={<Link to="/ruta-desconocida">Ruta desconocida</Link>} path="/" />
					<Route element={<p>Página desconocida</p>} path="*" />
				</Routes>
			</MemoryRouter>
		);

		await waitFor(() => {
			expect(getMetaContent('meta[name="description"]')).toBeDefined();
		});
		expect(document.head.querySelector('link[rel="canonical"]')).toBeInTheDocument();
		expect(document.getElementById("seo-structured-data")).toBeInTheDocument();

		await user.click(screen.getByRole("link", { name: "Ruta desconocida" }));

		await waitFor(() => {
			expect(getMetaContent('meta[name="robots"]')).toBe("noindex,follow");
		});
		expect(document.head.querySelector('meta[name="description"]')).not.toBeInTheDocument();
		expect(document.head.querySelector('link[rel="canonical"]')).not.toBeInTheDocument();
		expect(document.getElementById("seo-structured-data")).not.toBeInTheDocument();
		expect(document.title).toBe("Página no encontrada | Ancestral");
	});
});
