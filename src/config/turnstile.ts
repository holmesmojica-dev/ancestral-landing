export const turnstileConfig = {
	siteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? "",
} as const;
