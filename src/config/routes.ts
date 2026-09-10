export const routePaths = {
	home: "/",
	notFound: "/404",
	serviceDetail: "/servicios/:serviceSlug",
} as const;

export function createBaseAwarePath(applicationPath: string, baseUrl = import.meta.env.BASE_URL) {
	const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

	if (normalizedBaseUrl === routePaths.home) {
		return applicationPath;
	}

	const basePath = normalizedBaseUrl.slice(0, -1);

	if (
		applicationPath === basePath ||
		applicationPath.startsWith(`${basePath}/`) ||
		applicationPath.startsWith(`${basePath}#`)
	) {
		return applicationPath;
	}

	return `${basePath}${applicationPath}`;
}
