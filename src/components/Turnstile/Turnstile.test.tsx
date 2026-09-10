import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Turnstile, type TurnstileApi, type TurnstileRenderOptions } from "./Turnstile";

function createTurnstileApi() {
	let renderOptions: TurnstileRenderOptions | undefined;
	const renderWidget = vi.fn((_container: HTMLElement, options: TurnstileRenderOptions) => {
		renderOptions = options;
		return "widget-id";
	});
	const resetWidget = vi.fn();
	const removeWidget = vi.fn();
	const api: TurnstileApi = {
		render: renderWidget,
		reset: resetWidget,
		remove: removeWidget,
	};

	return {
		api,
		getRenderOptions: () => renderOptions,
		removeWidget,
		renderWidget,
		resetWidget,
	};
}

afterEach(() => {
	cleanup();
	document
		.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]')
		.forEach((script) => script.remove());
	delete window.turnstile;
	vi.restoreAllMocks();
});

describe("Turnstile", () => {
	it("renders explicitly with the approved options and exposes a successful token", async () => {
		const turnstile = createTurnstileApi();
		const onTokenChange = vi.fn();
		window.turnstile = turnstile.api;

		render(<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />);

		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());
		expect(screen.getByRole("group", { name: "Verificación de seguridad" })).toBeVisible();
		expect(turnstile.getRenderOptions()).toMatchObject({
			sitekey: "test-site-key",
			appearance: "interaction-only",
			theme: "auto",
			size: "flexible",
		});

		act(() => turnstile.getRenderOptions()?.callback("verified-token"));

		expect(onTokenChange).toHaveBeenLastCalledWith("verified-token");
		expect(screen.queryByRole("alert")).not.toBeInTheDocument();
	});

	it("uses the latest token callback without recreating the widget", async () => {
		const turnstile = createTurnstileApi();
		const initialCallback = vi.fn();
		const latestCallback = vi.fn();
		window.turnstile = turnstile.api;

		const view = render(<Turnstile onTokenChange={initialCallback} siteKey="test-site-key" />);
		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());

		view.rerender(<Turnstile onTokenChange={latestCallback} siteKey="test-site-key" />);
		act(() => turnstile.getRenderOptions()?.callback("latest-token"));

		expect(turnstile.renderWidget).toHaveBeenCalledOnce();
		expect(turnstile.removeWidget).not.toHaveBeenCalled();
		expect(initialCallback).not.toHaveBeenCalledWith("latest-token");
		expect(latestCallback).toHaveBeenLastCalledWith("latest-token");
	});

	it("resets the existing widget when its parent changes the reset signal", async () => {
		const turnstile = createTurnstileApi();
		const onTokenChange = vi.fn();
		window.turnstile = turnstile.api;

		const view = render(
			<Turnstile onTokenChange={onTokenChange} resetSignal={0} siteKey="test-site-key" />
		);
		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());
		act(() => turnstile.getRenderOptions()?.callback("verified-token"));

		view.rerender(
			<Turnstile onTokenChange={onTokenChange} resetSignal={1} siteKey="test-site-key" />
		);

		expect(turnstile.resetWidget).toHaveBeenCalledWith("widget-id");
		expect(onTokenChange).toHaveBeenLastCalledWith("");
		expect(turnstile.renderWidget).toHaveBeenCalledOnce();
	});

	it("clears an expired token and allows the visitor to reset the widget", async () => {
		const turnstile = createTurnstileApi();
		const onTokenChange = vi.fn();
		window.turnstile = turnstile.api;

		render(<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />);
		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());

		act(() => turnstile.getRenderOptions()?.callback("verified-token"));
		act(() => turnstile.getRenderOptions()?.["expired-callback"]());

		expect(onTokenChange).toHaveBeenLastCalledWith("");
		expect(screen.getByRole("alert")).toHaveTextContent("La verificación expiró.");

		fireEvent.click(screen.getByRole("button", { name: "Reintentar verificación" }));

		expect(turnstile.resetWidget).toHaveBeenCalledWith("widget-id");
		expect(screen.queryByRole("alert")).not.toBeInTheDocument();
	});

	it("clears the token and presents safe feedback when Turnstile reports an error", async () => {
		const turnstile = createTurnstileApi();
		const onTokenChange = vi.fn();
		window.turnstile = turnstile.api;

		render(<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />);
		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());

		act(() => turnstile.getRenderOptions()?.callback("verified-token"));
		act(() => turnstile.getRenderOptions()?.["error-callback"]("110200"));

		expect(onTokenChange).toHaveBeenLastCalledWith("");
		expect(screen.getByRole("alert")).toHaveTextContent("No pudimos completar la verificación.");
		expect(screen.queryByText(/110200/)).not.toBeInTheDocument();
	});

	it("does not inject duplicate scripts when multiple widgets mount together", async () => {
		const turnstile = createTurnstileApi();
		const onTokenChange = vi.fn();

		render(
			<>
				<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />
				<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />
			</>
		);

		const scripts = document.querySelectorAll<HTMLScriptElement>(
			'script[src*="challenges.cloudflare.com/turnstile"]'
		);
		expect(scripts).toHaveLength(1);

		window.turnstile = turnstile.api;
		fireEvent.load(scripts[0]);

		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledTimes(2));
	});

	it("reuses an existing loading script", async () => {
		const turnstile = createTurnstileApi();
		const existingScript = document.createElement("script");
		existingScript.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
		document.head.append(existingScript);

		render(<Turnstile onTokenChange={vi.fn()} siteKey="test-site-key" />);

		expect(
			document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]')
		).toHaveLength(1);

		window.turnstile = turnstile.api;
		fireEvent.load(existingScript);

		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());
	});

	it("clears a failed loading operation so a later retry can succeed", async () => {
		const turnstile = createTurnstileApi();
		const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined);

		render(<Turnstile onTokenChange={vi.fn()} siteKey="test-site-key" />);

		const failedScript = document.querySelector<HTMLScriptElement>(
			'script[src*="challenges.cloudflare.com/turnstile"]'
		);
		expect(failedScript).not.toBeNull();
		fireEvent.error(failedScript as HTMLScriptElement);

		await screen.findByRole("alert");
		expect(failedScript).not.toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "Reintentar verificación" }));

		const retryScript = await waitFor(() => {
			const candidate = document.querySelector<HTMLScriptElement>(
				'script[src*="challenges.cloudflare.com/turnstile"]'
			);
			expect(candidate).not.toBeNull();
			return candidate as HTMLScriptElement;
		});
		expect(retryScript).not.toBe(failedScript);

		window.turnstile = turnstile.api;
		fireEvent.load(retryScript);

		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());
		expect(consoleError).toHaveBeenCalledOnce();
	});

	it("uses an already-loaded client API and cleans up without breaking a later mount", async () => {
		const turnstile = createTurnstileApi();
		const onTokenChange = vi.fn();
		window.turnstile = turnstile.api;

		const firstMount = render(<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />);
		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledOnce());
		expect(
			document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')
		).not.toBeInTheDocument();

		firstMount.unmount();
		expect(turnstile.removeWidget).toHaveBeenCalledWith("widget-id");
		expect(onTokenChange).toHaveBeenLastCalledWith("");

		render(<Turnstile onTokenChange={onTokenChange} siteKey="test-site-key" />);
		await waitFor(() => expect(turnstile.renderWidget).toHaveBeenCalledTimes(2));
	});
});
