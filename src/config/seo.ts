import corporateLogo from "../assets/images/logo/full/ancestral-logo.svg";
import { routePaths } from "./routes";
import { services } from "./services";

export const SITE_URL = "https://ancestral-col.com";
export const SITE_NAME = "Ancestral";
export const ORGANIZATION_NAME = "Ancestral Servicios Ambientales";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/images/social/ancestral-social-preview.jpg`;
export const DEFAULT_ROBOTS_DIRECTIVE = "index,follow";

export const homeSeo = {
	title: "Ancestral | Servicios Ambientales en Colombia",
	description:
		"Formulamos, asesoramos y ejecutamos proyectos ambientales, forestales, agrícolas, hídricos y de seguridad y salud en el trabajo en Colombia.",
} as const;

export const notFoundSeo = {
	title: "Página no encontrada | Ancestral",
	description: "La página que buscas no existe, fue movida o ya no está disponible.",
	robots: "noindex,follow",
} as const;

export const indexableRoutes = [routePaths.home, ...services.map((service) => service.route)];

export interface RouteSeoMetadata {
	readonly route: string;
	readonly title: string;
	readonly description: string;
	readonly canonicalUrl: string;
}

type StructuredData = Readonly<Record<string, unknown>>;

function normalizePathname(pathname: string) {
	if (pathname === routePaths.home) {
		return pathname;
	}

	let endIndex = pathname.length;

	while (endIndex > 0 && pathname[endIndex - 1] === "/") {
		endIndex -= 1;
	}

	return pathname.slice(0, endIndex);
}

export function createCanonicalUrl(route: string) {
	return new URL(route, `${SITE_URL}/`).toString();
}

function createOrganizationSchema(): StructuredData {
	return {
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: ORGANIZATION_NAME,
		url: `${SITE_URL}/`,
		logo: createCanonicalUrl(corporateLogo),
		telephone: "+57 316 411 4933",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Calle 54 # 22 - 12",
			addressLocality: "Bucaramanga",
			addressRegion: "Santander",
			addressCountry: "Colombia",
		},
		areaServed: {
			"@type": "Country",
			name: "Colombia",
		},
	};
}

export function getSeoMetadata(pathname: string): RouteSeoMetadata | undefined {
	const normalizedPathname = normalizePathname(pathname);

	if (normalizedPathname === routePaths.home) {
		return {
			route: routePaths.home,
			...homeSeo,
			canonicalUrl: createCanonicalUrl(routePaths.home),
		};
	}

	const service = services.find(({ route }) => route === normalizedPathname);

	if (!service) {
		return undefined;
	}

	return {
		route: service.route,
		...service.seo,
		canonicalUrl: createCanonicalUrl(service.route),
	};
}

export function getStructuredData(pathname: string): StructuredData | undefined {
	const metadata = getSeoMetadata(pathname);

	if (!metadata) {
		return undefined;
	}

	const organization = createOrganizationSchema();

	if (metadata.route === routePaths.home) {
		return {
			"@context": "https://schema.org",
			"@graph": [
				organization,
				{
					"@type": "WebSite",
					"@id": `${SITE_URL}/#website`,
					name: SITE_NAME,
					url: `${SITE_URL}/`,
					publisher: { "@id": `${SITE_URL}/#organization` },
					inLanguage: "es",
				},
			],
		};
	}

	const service = services.find(({ route }) => route === metadata.route);

	if (!service) {
		return undefined;
	}

	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				"@id": `${metadata.canonicalUrl}#service`,
				name: service.name,
				description: service.seo.description,
				url: metadata.canonicalUrl,
				provider: organization,
				areaServed: {
					"@type": "Country",
					name: "Colombia",
				},
			},
		],
	};
}

export function createSitemap() {
	const urls = indexableRoutes
		.map((route) => `\t<url><loc>${createCanonicalUrl(route)}</loc></url>`)
		.join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}
