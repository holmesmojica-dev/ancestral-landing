import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { routePaths } from "../../config/routes";
import { services } from "../../config/services";
import { ServiceDetailPage } from "./ServiceDetailPage";

function CurrentLocation() {
	const location = useLocation();

	return <output data-testid="current-location">{`${location.pathname}${location.hash}`}</output>;
}

function renderServiceDetail(initialEntry: string) {
	return render(
		<MemoryRouter
			future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
			initialEntries={[initialEntry]}
		>
			<Routes>
				<Route
					element={
						<>
							<ServiceDetailPage />
							<CurrentLocation />
						</>
					}
					path={routePaths.serviceDetail}
				/>
				<Route
					element={
						<>
							<p>Página de inicio</p>
							<CurrentLocation />
						</>
					}
					path={routePaths.home}
				/>
			</Routes>
		</MemoryRouter>
	);
}

describe.each(services)("ServiceDetailPage — $name", (service) => {
	it("resolves approved content and conversion context from its slug", () => {
		renderServiceDetail(service.route);

		expect(screen.getByRole("heading", { level: 1, name: service.name })).toBeVisible();
		expect(screen.getByText(service.detail.heroCopy)).toBeVisible();
		expect(screen.getByText(service.detail.valueProposition)).toBeVisible();
		expect(screen.getByRole("region", { name: service.name })).toHaveAttribute("id", "servicio");

		const breadcrumb = screen.getByRole("navigation", { name: "Ruta del servicio" });
		expect(within(breadcrumb).getByRole("link", { name: "Todos los servicios" })).toHaveAttribute(
			"href",
			"/#servicios"
		);
		expect(within(breadcrumb).getByText(service.name)).toHaveAttribute("aria-current", "page");

		const capabilities = screen.getByRole("region", { name: "Capacidades del servicio" });
		expect(capabilities).toHaveAttribute("id", "capacidades");
		for (const capability of service.detail.capabilities) {
			expect(
				within(capabilities).getByRole("heading", { level: 3, name: capability.title })
			).toBeVisible();
			expect(within(capabilities).getByText(capability.description)).toBeVisible();
		}

		expect(screen.getByRole("region", { name: service.detail.context.title })).toHaveAttribute(
			"id",
			"territorio"
		);
		expect(screen.getByRole("region", { name: "Nuestro trabajo en imágenes" })).toHaveAttribute(
			"id",
			"experiencia"
		);
		expect(screen.getByRole("region", { name: service.detail.contact.heading })).toHaveAttribute(
			"id",
			"contacto"
		);

		expect(screen.getByLabelText("Servicio")).toHaveValue(service.id);

		const whatsAppLink = screen.getByRole("link", {
			name: `Hablemos por WhatsApp sobre ${service.name}`,
		});
		const whatsAppMessage = new URL(whatsAppLink.getAttribute("href") ?? "").searchParams.get(
			"text"
		);
		expect(whatsAppMessage).toContain(service.name);

		for (const image of service.detail.gallery) {
			expect(screen.getByRole("img", { hidden: true, name: image.alt })).toHaveAttribute(
				"loading",
				"lazy"
			);
		}
	});
});

describe("ServiceDetailPage invalid slug", () => {
	it("redirects safely to the Home services section", async () => {
		renderServiceDetail("/servicios/no-existe");

		expect(await screen.findByTestId("current-location")).toHaveTextContent("/#servicios");
		expect(screen.getByText("Página de inicio")).toBeVisible();
	});
});
