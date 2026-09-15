export function normalizeApiBaseUrl(value: string | undefined): string | null {
	const candidate = value?.trim();

	if (!candidate) {
		return null;
	}

	try {
		const url = new URL(candidate);

		if (
			(url.protocol !== "http:" && url.protocol !== "https:") ||
			url.username ||
			url.password ||
			url.search ||
			url.hash ||
			url.pathname !== "/"
		) {
			return null;
		}

		return url.origin;
	} catch {
		return null;
	}
}

export const apiConfig = {
	baseUrl: normalizeApiBaseUrl(import.meta.env.VITE_API_BASE_URL),
} as const;
