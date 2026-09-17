import { describe, expect, it } from "vitest";

import { services } from "./services";
import {
	DEFAULT_ROBOTS_DIRECTIVE,
	ORGANIZATION_LOGO_URL,
	ORGANIZATION_NAME,
	SITE_URL,
	SOCIAL_IMAGE_URL,
	createCanonicalUrl,
	createSitemap,
	getSeoMetadata,
	getStructuredData,
	homeSeo,
	indexableRoutes,
} from "./seo";

const expectedServiceSeo = [
	{
		route: "/servicios/ambientales",
		title: "Servicios Ambientales y Consultoría Ambiental | Ancestral",
		description:
			"Ancestral brinda servicios ambientales y consultoría ambiental para formular, planificar, ejecutar y acompañar proyectos públicos y privados en Colombia.",
	},
	{
		route: "/servicios/forestales",
		title: "Servicios Forestales en Colombia | Ancestral",
		description:
			"Servicios forestales de Ancestral: inventario forestal, aprovechamiento forestal, manejo, recuperación y conservación con experiencia técnica en campo.",
	},
	{
		route: "/servicios/agricolas",
		title: "Servicios Agrícolas en Colombia | Ancestral",
		description:
			"Ancestral ofrece servicios de consultoría agrícola y asesoría técnica para preparación de tierras, infraestructura, caracterización de suelos y apoyo operativo.",
	},
	{
		route: "/servicios/recurso-hidrico",
		title: "Gestión del Recurso Hídrico en Colombia | Ancestral",
		description:
			"Ancestral acompaña la gestión y el manejo del recurso hídrico mediante planificación, protección de acuíferos, cuencas, cauces y manejo de vertimientos.",
	},
	{
		route: "/servicios/seguridad-salud-trabajo",
		title: "Seguridad y Salud en el Trabajo (SG-SST) | Ancestral",
		description:
			"Ancestral diseña, implementa y fortalece Sistemas de Gestión de Seguridad y Salud en el Trabajo (SG-SST), auditorías y procesos de gestión.",
	},
] as const;

describe("SEO configuration", () => {
	it("defines the approved Home metadata", () => {
		expect(homeSeo).toEqual({
			title: "Ancestral | Servicios Ambientales en Colombia",
			description:
				"Ancestral Servicios Ambientales formula, asesora y ejecuta proyectos ambientales, forestales, agrícolas, hídricos y de seguridad y salud en el trabajo en Colombia.",
		});
		expect(getSeoMetadata("/")).toMatchObject(homeSeo);
		expect(SOCIAL_IMAGE_URL).toBe(
			"https://ancestral-col.com/images/social/ancestral-social-preview.jpg"
		);
		expect(ORGANIZATION_LOGO_URL).toBe(
			"https://ancestral-col.com/images/brand/ancestral-logo-seo.png"
		);
		expect(DEFAULT_ROBOTS_DIRECTIVE).toBe("index,follow,max-image-preview:large");
	});

	it.each([
		["/servicios/ambientales", ["servicios ambientales", "consultoría ambiental"]],
		["/servicios/forestales", ["inventario forestal", "aprovechamiento forestal"]],
		["/servicios/agricolas", ["servicios de consultoría agrícola", "asesoría técnica"]],
		["/servicios/recurso-hidrico", ["gestión", "manejo del recurso hídrico"]],
		["/servicios/seguridad-salud-trabajo", ["Seguridad y Salud en el Trabajo", "SG-SST"]],
	] as const)("expresses the approved search intent for %s", (route, expectedTerms) => {
		const metadata = getSeoMetadata(route);
		const searchableMetadata = `${metadata?.title} ${metadata?.description}`.toLocaleLowerCase(
			"es"
		);

		for (const term of expectedTerms) {
			expect(searchableMetadata).toContain(term.toLocaleLowerCase("es"));
		}
	});

	it.each(expectedServiceSeo)("defines the approved metadata for $route", (expected) => {
		expect(services.find(({ route }) => route === expected.route)?.seo).toEqual({
			title: expected.title,
			description: expected.description,
		});
		expect(getSeoMetadata(expected.route)).toEqual({
			...expected,
			canonicalUrl: `${SITE_URL}${expected.route}`,
		});
	});

	it("derives canonical URLs from the production domain and route", () => {
		expect(createCanonicalUrl("/")).toBe("https://ancestral-col.com/");
		expect(createCanonicalUrl("/servicios/ambientales")).toBe(
			"https://ancestral-col.com/servicios/ambientales"
		);
		expect(getSeoMetadata("/servicios/ambientales/")?.canonicalUrl).toBe(
			"https://ancestral-col.com/servicios/ambientales"
		);
	});

	it("normalizes only trailing slashes while preserving the root route", () => {
		expect(getSeoMetadata("/")?.route).toBe("/");
		expect(getSeoMetadata("/servicios/ambientales///")?.route).toBe("/servicios/ambientales");
		expect(getSeoMetadata("/servicios//ambientales///")).toBeUndefined();
	});

	it("does not assign Home metadata to unknown routes", () => {
		expect(getSeoMetadata("/ruta-desconocida")).toBeUndefined();
		expect(getStructuredData("/ruta-desconocida")).toBeUndefined();
	});
});

describe("structured data", () => {
	it("describes the organization and website on Home without unsupported claims", () => {
		const structuredData = getStructuredData("/");
		const graph = structuredData?.["@graph"] as readonly Record<string, unknown>[];
		const organization = graph[0];
		const website = graph[1];

		expect(graph).toHaveLength(2);
		expect(organization).toMatchObject({
			"@type": "Organization",
			name: ORGANIZATION_NAME,
			url: "https://ancestral-col.com/",
			logo: ORGANIZATION_LOGO_URL,
			telephone: "+57 316 411 4933",
			areaServed: { "@type": "Country", name: "Colombia" },
		});
		expect(organization).not.toHaveProperty("sameAs");
		expect(organization).not.toHaveProperty("aggregateRating");
		expect(website).toMatchObject({
			"@type": "WebSite",
			name: "Ancestral",
			url: "https://ancestral-col.com/",
			inLanguage: "es",
		});
	});

	it.each(services)("describes $name as a service provided in Colombia", (service) => {
		const structuredData = getStructuredData(service.route);
		const graph = structuredData?.["@graph"] as readonly Record<string, unknown>[];
		const serviceSchema = graph[0];
		const breadcrumbSchema = graph[1];

		expect(graph).toHaveLength(2);
		expect(serviceSchema).toMatchObject({
			"@type": "Service",
			name: service.name,
			description: service.seo.description,
			url: createCanonicalUrl(service.route),
			areaServed: { "@type": "Country", name: "Colombia" },
			provider: { "@type": "Organization", name: ORGANIZATION_NAME },
		});
		expect(breadcrumbSchema).toEqual({
			"@type": "BreadcrumbList",
			"@id": `${createCanonicalUrl(service.route)}#breadcrumb`,
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
					item: createCanonicalUrl(service.route),
				},
			],
		});
		expect(JSON.stringify(structuredData)).not.toContain(
			'"item":"https://ancestral-col.com/servicios"'
		);
		expect(JSON.stringify(structuredData)).not.toContain("sameAs");
		expect(JSON.stringify(structuredData)).not.toContain("aggregateRating");
	});
});

describe("sitemap", () => {
	it("contains exactly the six indexable canonical URLs", () => {
		const document = new DOMParser().parseFromString(createSitemap(), "application/xml");
		const locations = [...document.querySelectorAll("loc")].map((element) => element.textContent);

		expect(indexableRoutes).toHaveLength(6);
		expect(locations).toEqual(indexableRoutes.map(createCanonicalUrl));
	});
});
