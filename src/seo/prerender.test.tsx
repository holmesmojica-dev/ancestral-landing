import { describe, expect, it } from "vitest";

import robots from "../../public/robots.txt?raw";
import { services } from "../config/services";
import { createSitemap, indexableRoutes, renderDocument } from "../entry-server";

const template = `<!doctype html>
<html lang="es">
	<head><!--seo-head--></head>
	<body><div id="root"><!--app-html--></div></body>
</html>`;

describe("build-time prerendering", () => {
	it("renders route-specific Home metadata and content into the initial HTML", () => {
		const html = renderDocument(template, "/");

		expect(html).toContain('<html lang="es">');
		expect(html).toContain("<title>Ancestral | Servicios Ambientales en Colombia</title>");
		expect(html).toContain("Transformamos");
		expect(html).toContain('type="application/ld+json"');
		expect(html).toContain('"@type":"Organization"');
		expect(html).toContain('"@type":"WebSite"');
	});

	it.each(services)("renders route-specific initial HTML for $route", (service) => {
		const html = renderDocument(template, service.route);

		expect(html).toContain(`<title>${service.seo.title}</title>`);
		expect(html).toContain(`content="${service.seo.description}"`);
		expect(html).toContain(`href="https://ancestral-col.com${service.route}"`);
		expect(html).toContain(service.name);
		expect(html).toContain('"@type":"Service"');
		expect(html).not.toContain("<title>Ancestral | Servicios Ambientales en Colombia</title>");
	});

	it("rejects non-indexable routes", () => {
		expect(() => renderDocument(template, "/ruta-desconocida")).toThrow(
			"Cannot render SEO metadata for non-indexable route"
		);
	});

	it("keeps the generated sitemap aligned with the prerender route list", () => {
		const sitemap = createSitemap();

		expect(sitemap.match(/<url>/g)).toHaveLength(indexableRoutes.length);
	});
});

describe("robots.txt", () => {
	it("allows public crawling and declares the production sitemap", () => {
		expect(robots).toContain("User-agent: *");
		expect(robots).toContain("Allow: /");
		expect(robots).toContain("Sitemap: https://ancestral-col.com/sitemap.xml");
	});
});
