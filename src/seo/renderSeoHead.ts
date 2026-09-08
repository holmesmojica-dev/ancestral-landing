import {
	DEFAULT_ROBOTS_DIRECTIVE,
	SITE_NAME,
	SOCIAL_IMAGE_URL,
	getSeoMetadata,
	getStructuredData,
} from "../config/seo";

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;");
}

function serializeStructuredData(value: Readonly<Record<string, unknown>>) {
	return JSON.stringify(value).replace(/</g, String.raw`\u003c`);
}

export function renderSeoHead(pathname: string) {
	const metadata = getSeoMetadata(pathname);
	const structuredData = getStructuredData(pathname);

	if (!metadata || !structuredData) {
		throw new Error(`Cannot render SEO metadata for non-indexable route: ${pathname}`);
	}

	const title = escapeHtml(metadata.title);
	const description = escapeHtml(metadata.description);
	const canonicalUrl = escapeHtml(metadata.canonicalUrl);

	return `<title>${title}</title>
		<meta name="description" content="${description}" />
		<meta name="robots" content="${DEFAULT_ROBOTS_DIRECTIVE}" />
		<link rel="canonical" href="${canonicalUrl}" />
		<meta property="og:type" content="website" />
		<meta property="og:locale" content="es_CO" />
		<meta property="og:site_name" content="${SITE_NAME}" />
		<meta property="og:title" content="${title}" />
		<meta property="og:description" content="${description}" />
		<meta property="og:url" content="${canonicalUrl}" />
		<meta property="og:image" content="${SOCIAL_IMAGE_URL}" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="${title}" />
		<meta name="twitter:description" content="${description}" />
		<meta name="twitter:image" content="${SOCIAL_IMAGE_URL}" />
		<script id="seo-structured-data" type="application/ld+json">${serializeStructuredData(structuredData)}</script>`;
}
