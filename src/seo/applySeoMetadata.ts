import {
	DEFAULT_ROBOTS_DIRECTIVE,
	SITE_NAME,
	SOCIAL_IMAGE_URL,
	getSeoMetadata,
	getStructuredData,
} from "../config/seo";

type MetadataAttribute = "name" | "property";

const managedMetaTags = [
	["property", "og:type"],
	["property", "og:locale"],
	["property", "og:site_name"],
	["property", "og:title"],
	["property", "og:description"],
	["property", "og:url"],
	["property", "og:image"],
	["name", "twitter:card"],
	["name", "twitter:title"],
	["name", "twitter:description"],
	["name", "twitter:image"],
] as const satisfies readonly (readonly [MetadataAttribute, string])[];

function setMetaTag(attribute: MetadataAttribute, key: string, content: string) {
	let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

	if (!element) {
		element = document.createElement("meta");
		element.setAttribute(attribute, key);
		document.head.append(element);
	}

	element.content = content;
}

function removeIndexableRouteMetadata() {
	document.head.querySelector('meta[name="description"]')?.remove();

	for (const [attribute, key] of managedMetaTags) {
		document.head.querySelector(`meta[${attribute}="${key}"]`)?.remove();
	}

	document.head.querySelector('link[rel="canonical"]')?.remove();
	document.getElementById("seo-structured-data")?.remove();
}

export function applySeoMetadata(pathname: string) {
	const metadata = getSeoMetadata(pathname);
	const structuredData = getStructuredData(pathname);

	if (!metadata || !structuredData) {
		document.title = "Página no encontrada | Ancestral";
		setMetaTag("name", "robots", "noindex,follow");
		removeIndexableRouteMetadata();
		return;
	}

	document.title = metadata.title;
	setMetaTag("name", "description", metadata.description);
	setMetaTag("name", "robots", DEFAULT_ROBOTS_DIRECTIVE);
	setMetaTag("property", "og:type", "website");
	setMetaTag("property", "og:locale", "es_CO");
	setMetaTag("property", "og:site_name", SITE_NAME);
	setMetaTag("property", "og:title", metadata.title);
	setMetaTag("property", "og:description", metadata.description);
	setMetaTag("property", "og:url", metadata.canonicalUrl);
	setMetaTag("property", "og:image", SOCIAL_IMAGE_URL);
	setMetaTag("name", "twitter:card", "summary_large_image");
	setMetaTag("name", "twitter:title", metadata.title);
	setMetaTag("name", "twitter:description", metadata.description);
	setMetaTag("name", "twitter:image", SOCIAL_IMAGE_URL);

	let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

	if (!canonical) {
		canonical = document.createElement("link");
		canonical.rel = "canonical";
		document.head.append(canonical);
	}

	canonical.href = metadata.canonicalUrl;

	let script = document.getElementById("seo-structured-data");

	if (!script) {
		script = document.createElement("script");
		script.id = "seo-structured-data";
		script.setAttribute("type", "application/ld+json");
		document.head.append(script);
	}

	script.textContent = JSON.stringify(structuredData);
}
