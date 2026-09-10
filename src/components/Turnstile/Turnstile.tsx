import { useCallback, useEffect, useId, useRef, useState } from "react";

const turnstileScriptUrl = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const turnstileLoadTimeoutMilliseconds = 15_000;
const loaderStateAttribute = "turnstileLoaderState";

export interface TurnstileRenderOptions {
	readonly sitekey: string;
	readonly appearance: "interaction-only";
	readonly theme: "auto";
	readonly size: "flexible";
	readonly callback: (token: string) => void;
	readonly "expired-callback": () => void;
	readonly "error-callback": (errorCode?: string) => void;
}

export interface TurnstileApi {
	render(container: HTMLElement, options: TurnstileRenderOptions): string;
	reset(widgetId: string): void;
	remove(widgetId: string): void;
}

declare global {
	interface Window {
		turnstile?: TurnstileApi;
	}
}

let turnstileLoading: Promise<TurnstileApi> | undefined;

function waitForTurnstileScript(script: HTMLScriptElement): Promise<TurnstileApi> {
	return new Promise((resolve, reject) => {
		let isSettled = false;

		const cleanUpListeners = () => {
			script.removeEventListener("load", handleLoad);
			script.removeEventListener("error", handleError);

			window.clearTimeout(timeoutId);
		};
		const fail = (message: string) => {
			if (isSettled) {
				return;
			}

			isSettled = true;
			cleanUpListeners();
			script.dataset[loaderStateAttribute] = "failed";
			script.remove();
			reject(new Error(message));
		};
		const handleLoad = () => {
			if (isSettled) {
				return;
			}

			if (window.turnstile) {
				isSettled = true;
				cleanUpListeners();
				script.dataset[loaderStateAttribute] = "loaded";
				resolve(window.turnstile);
				return;
			}

			fail("Cloudflare Turnstile loaded without exposing its client API.");
		};
		const handleError = () => {
			fail("Cloudflare Turnstile could not be loaded.");
		};

		script.addEventListener("load", handleLoad);
		script.addEventListener("error", handleError);
		const timeoutId = window.setTimeout(
			() => fail("Cloudflare Turnstile did not finish loading in time."),
			turnstileLoadTimeoutMilliseconds
		);

		if (window.turnstile || script.dataset[loaderStateAttribute] === "loaded") {
			handleLoad();
		} else if (script.dataset[loaderStateAttribute] === "failed") {
			handleError();
		}
	});
}

function loadTurnstile(): Promise<TurnstileApi> {
	if (typeof window === "undefined" || typeof document === "undefined") {
		return Promise.reject(new Error("Cloudflare Turnstile requires a browser environment."));
	}

	if (window.turnstile) {
		return Promise.resolve(window.turnstile);
	}

	if (turnstileLoading) {
		return turnstileLoading;
	}

	let script = document.querySelector<HTMLScriptElement>(`script[src="${turnstileScriptUrl}"]`);

	if (script?.dataset[loaderStateAttribute] === "failed") {
		script.remove();
		script = null;
	}

	if (!script) {
		script = document.createElement("script");
		script.async = true;
		script.defer = true;
		script.src = turnstileScriptUrl;
		script.dataset[loaderStateAttribute] = "loading";
		document.head.append(script);
	}

	const loading = waitForTurnstileScript(script);
	turnstileLoading = loading;

	void loading.then(
		() => {
			if (turnstileLoading === loading) {
				turnstileLoading = undefined;
			}
		},
		() => {
			if (turnstileLoading === loading) {
				turnstileLoading = undefined;
			}
		}
	);

	return loading;
}

export interface TurnstileProps {
	readonly onTokenChange: (token: string) => void;
	readonly resetSignal?: number;
	readonly siteKey: string;
}

export function Turnstile({ onTokenChange, resetSignal = 0, siteKey }: Readonly<TurnstileProps>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const apiRef = useRef<TurnstileApi>();
	const widgetIdRef = useRef<string>();
	const onTokenChangeRef = useRef(onTokenChange);
	const previousResetSignalRef = useRef(resetSignal);
	const [feedback, setFeedback] = useState<string>();
	const [renderAttempt, setRenderAttempt] = useState(0);
	const labelId = useId();
	const feedbackId = useId();
	onTokenChangeRef.current = onTokenChange;

	const resetWidget = useCallback(() => {
		onTokenChangeRef.current("");
		setFeedback(undefined);

		if (apiRef.current && widgetIdRef.current) {
			apiRef.current.reset(widgetIdRef.current);
			return;
		}

		setRenderAttempt((attempt) => attempt + 1);
	}, []);

	useEffect(() => {
		let isMounted = true;
		const container = containerRef.current;

		onTokenChangeRef.current("");

		if (!siteKey) {
			setFeedback("No fue posible iniciar la verificación de seguridad. Intenta nuevamente.");
			return;
		}

		if (!container) {
			return;
		}

		setFeedback(undefined);

		void loadTurnstile()
			.then((api) => {
				if (!isMounted) {
					return;
				}

				apiRef.current = api;
				widgetIdRef.current = api.render(container, {
					sitekey: siteKey,
					appearance: "interaction-only",
					theme: "auto",
					size: "flexible",
					callback: (token) => {
						setFeedback(undefined);
						onTokenChangeRef.current(token);
					},
					"expired-callback": () => {
						onTokenChangeRef.current("");
						setFeedback("La verificación expiró. Intenta nuevamente.");
					},
					"error-callback": () => {
						onTokenChangeRef.current("");
						setFeedback("No pudimos completar la verificación. Intenta nuevamente.");
					},
				});
			})
			.catch((error: unknown) => {
				if (!isMounted) {
					return;
				}

				console.error("Unable to load Cloudflare Turnstile.", error);
				setFeedback("No fue posible iniciar la verificación de seguridad. Intenta nuevamente.");
			});

		return () => {
			isMounted = false;
			onTokenChangeRef.current("");

			if (apiRef.current && widgetIdRef.current) {
				apiRef.current.remove(widgetIdRef.current);
			}

			apiRef.current = undefined;
			widgetIdRef.current = undefined;
		};
	}, [renderAttempt, siteKey]);

	useEffect(() => {
		if (previousResetSignalRef.current === resetSignal) {
			return;
		}

		previousResetSignalRef.current = resetSignal;
		resetWidget();
	}, [resetSignal, resetWidget]);

	return (
		<div
			aria-describedby={feedback ? feedbackId : undefined}
			aria-labelledby={labelId}
			className="contact__captcha"
			role="group"
		>
			<span className="visually-hidden" id={labelId}>
				Verificación de seguridad
			</span>
			<div className="contact__captcha-widget" ref={containerRef} />
			{feedback ? (
				<div className="contact__captcha-feedback" id={feedbackId}>
					<p role="alert">{feedback}</p>
					<button onClick={resetWidget} type="button">
						Reintentar verificación
					</button>
				</div>
			) : null}
		</div>
	);
}
