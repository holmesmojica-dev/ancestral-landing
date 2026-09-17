import { describe, expect, it } from "vitest";

import robots from "../../public/robots.txt?raw";
import {
	DEFAULT_ROBOTS_DIRECTIVE,
	ORGANIZATION_LOGO_URL,
	homeSeo,
	notFoundSeo,
} from "../config/seo";
import { routePaths } from "../config/routes";
import { services } from "../config/services";
import { createSitemap, indexableRoutes, notFoundRoute, renderDocument } from "../entry-server";

const template = `<!doctype html>
<html lang="es">
	<head><!--seo-head--></head>
	<body><div id="root"><!--app-html--></div></body>
</html>`;

function readStructuredData(html: string) {
	const document = new DOMParser().parseFromString(html, "text/html");
	const content = document.getElementById("seo-structured-data")?.textContent;

	return JSON.parse(content ?? "") as Readonly<Record<string, unknown>>;
}

describe("build-time prerendering", () => {
	it("renders route-specific Home metadata and content into the initial HTML", () => {
		const html = renderDocument(template, "/");

		expect(html).toContain('<html lang="es">');
		expect(html).toContain("<title>Ancestral | Servicios Ambientales en Colombia</title>");
		expect(html).toContain("Transformamos");
		expect(html).toContain(`content="${DEFAULT_ROBOTS_DIRECTIVE}"`);
		expect(html).toContain('type="application/ld+json"');

		const graph = readStructuredData(html)["@graph"] as readonly Record<string, unknown>[];

		expect(graph).toHaveLength(2);
		expect(graph[0]).toMatchObject({ "@type": "Organization", logo: ORGANIZATION_LOGO_URL });
		expect(graph[1]).toMatchObject({ "@type": "WebSite" });
	});

	it("renders internal React Router links for root and subpath deployments", () => {
		const rootHtml = renderDocument(template, routePaths.home, "/");
		const pagesHtml = renderDocument(template, routePaths.home, "/ancestral-landing/");

		expect(rootHtml).toContain('href="/servicios/ambientales"');
		expect(pagesHtml).toContain('href="/ancestral-landing/servicios/ambientales"');
		expect(pagesHtml).toContain('href="#contacto"');
		expect(pagesHtml).toContain('<link rel="canonical" href="https://ancestral-col.com/"');
		expect(pagesHtml).not.toContain(
			'<link rel="canonical" href="https://ancestral-col.com/ancestral-landing/"'
		);
	});

	it.each(services)("renders route-specific initial HTML for $route", (service) => {
		const html = renderDocument(template, service.route);

		expect(html).toContain(`<title>${service.seo.title}</title>`);
		expect(html).toContain(`content="${service.seo.description}"`);
		expect(html).toContain(`content="${DEFAULT_ROBOTS_DIRECTIVE}"`);
		expect(html).toContain(`href="https://ancestral-col.com${service.route}"`);
		expect(html).toContain(service.name);

		const graph = readStructuredData(html)["@graph"] as readonly Record<string, unknown>[];

		expect(graph).toHaveLength(2);
		expect(graph[0]).toMatchObject({ "@type": "Service" });
		expect(graph[1]).toEqual({
			"@type": "BreadcrumbList",
			"@id": `https://ancestral-col.com${service.route}#breadcrumb`,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Todos los servicios",
					item: "https://ancestral-col.com/",
				},
				{
					"@type": "ListItem",
					position: 2,
					name: service.name,
					item: `https://ancestral-col.com${service.route}`,
				},
			],
		});
		expect(html).not.toContain("<title>Ancestral | Servicios Ambientales en Colombia</title>");
	});

	it("rejects non-indexable routes", () => {
		expect(() => renderDocument(template, "/ruta-desconocida")).toThrow(
			"Cannot render SEO metadata for non-indexable route"
		);
	});

	it("renders the non-indexable 404 document without indexable-route metadata", () => {
		const html = renderDocument(template, notFoundRoute);

		expect(notFoundRoute).toBe(routePaths.notFound);
		expect(html).toContain(`<title>${notFoundSeo.title}</title>`);
		expect(html).toContain(`content="${notFoundSeo.description}"`);
		expect(html).toContain('content="noindex,follow"');
		expect(html).toContain("Página no encontrada");
		expect(html).toContain("Volver al inicio");
		expect(html).not.toContain('rel="canonical"');
		expect(html).not.toContain("og:");
		expect(html).not.toContain("twitter:");
		expect(html).not.toContain('type="application/ld+json"');
		expect(html).not.toContain(homeSeo.title);
	});

	it("keeps the generated sitemap aligned with the prerender route list", () => {
		const sitemap = createSitemap();

		expect(sitemap.match(/<url>/g)).toHaveLength(indexableRoutes.length);
		expect(indexableRoutes).not.toContain(notFoundRoute);
		expect(sitemap).not.toContain("/404");
	});
});

describe("robots.txt", () => {
	it("allows public crawling and declares the production sitemap", () => {
		expect(robots).toContain("User-agent: *");
		expect(robots).toContain("Allow: /");
		expect(robots).toContain("Sitemap: https://ancestral-col.com/sitemap.xml");
	});
});
