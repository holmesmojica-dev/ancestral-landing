import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useLocation } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { services } from "./config/services";
import App from "./App";

function CurrentPath() {
	const location = useLocation();

	return <output data-testid="current-path">{`${location.pathname}${location.hash}`}</output>;
}

function renderApp(initialEntry = "/") {
	return render(
		<MemoryRouter
			future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
			initialEntries={[initialEntry]}
		>
			<App />
			<CurrentPath />
		</MemoryRouter>
	);
}

describe("App", () => {
	it("renders the accessible home composition", () => {
		renderApp();

		expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
		expect(
			screen.getByRole("heading", {
				level: 1,
				name: "Transformamos entornos, generamos vida.",
			})
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Saltar al contenido principal" })).toHaveAttribute(
			"href",
			"#main-content"
		);
		expect(screen.getAllByRole("img", { name: "Ancestral Servicios Ambientales" })).toHaveLength(2);
		expect(screen.getByRole("region", { name: "¿Quiénes somos?" })).toBeVisible();
		expect(screen.getByRole("region", { name: "Nuestros servicios" })).toBeVisible();
		expect(
			screen.getByRole("region", { name: "Comprometidos con nuestro territorio" })
		).toBeVisible();
		expect(
			screen.getByRole("region", { name: "Entidades que han confiado en nosotros" })
		).toBeVisible();
		expect(screen.getByRole("region", { name: "Hablemos de tu proyecto" })).toBeVisible();
		expect(screen.getByRole("contentinfo")).toBeVisible();
	});

	it("moves focus from the skip link to the Home main content", async () => {
		const user = userEvent.setup();
		renderApp();

		const skipLink = screen.getByRole("link", { name: "Saltar al contenido principal" });
		skipLink.focus();
		await user.keyboard("{Enter}");

		expect(screen.getByRole("main")).toHaveFocus();
	});

	it("moves focus beyond the Service Detail breadcrumb", async () => {
		const user = userEvent.setup();
		renderApp(services[0].route);

		const skipLink = screen.getByRole("link", { name: "Saltar al contenido principal" });
		const serviceHeading = screen.getByRole("heading", { level: 1, name: services[0].name });
		const breadcrumbLink = screen.getByRole("link", { name: "Todos los servicios" });

		expect(skipLink).toHaveAttribute("href", "#service-detail-title");
		skipLink.focus();
		await user.keyboard("{Enter}");

		expect(serviceHeading).toHaveFocus();

		await user.tab();

		expect(breadcrumbLink).not.toHaveFocus();
		expect(screen.getByRole("button", { name: "Mostrar imagen anterior" })).toHaveFocus();
	});

	it("navigates from a Home service card to the reusable service detail route", async () => {
		const user = userEvent.setup();
		renderApp();

		await user.click(screen.getByRole("link", { name: services[0].name }));

		expect(await screen.findByTestId("current-path")).toHaveTextContent(services[0].route);
		expect(screen.getByRole("heading", { level: 1, name: services[0].name })).toBeInTheDocument();
	});

	it("redirects an unknown service slug to the Home services section", async () => {
		renderApp("/servicios/desconocido");

		expect(await screen.findByTestId("current-path")).toHaveTextContent("/#servicios");
		expect(
			screen.getByRole("heading", { level: 1, name: "Transformamos entornos, generamos vida." })
		).toBeInTheDocument();
	});

	it("renders the custom 404 page with shared navigation back to Home", () => {
		renderApp("/ruta-desconocida");

		expect(
			screen.getByRole("heading", { level: 1, name: "Página no encontrada" })
		).toBeInTheDocument();
		expect(
			screen.getByText("La página que buscas no existe, fue movida o ya no está disponible.")
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Volver al inicio" })).toHaveAttribute("href", "/");
		expect(screen.getByRole("link", { name: "Ver nuestros servicios" })).toHaveAttribute(
			"href",
			"/#servicios"
		);
		const primaryNavigation = within(
			screen.getByRole("navigation", { name: "Navegación principal" })
		);

		expect(primaryNavigation.getByRole("link", { name: "Inicio" })).toHaveAttribute(
			"href",
			"/#inicio"
		);
		expect(primaryNavigation.queryByRole("link", { name: "Capacidades" })).not.toBeInTheDocument();
		expect(screen.getByRole("link", { name: "Saltar al contenido principal" })).toHaveAttribute(
			"href",
			"#main-content"
		);
		expect(screen.getAllByRole("img", { name: "Ancestral Servicios Ambientales" })).toHaveLength(2);
		expect(screen.getByRole("contentinfo")).toBeVisible();
	});
});
