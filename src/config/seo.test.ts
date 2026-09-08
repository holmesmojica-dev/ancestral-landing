import { describe, expect, it } from "vitest";

import { services } from "./services";
import {
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
		title: "Servicios Ambientales en Colombia | Ancestral",
		description:
			"Formulamos, planificamos, ejecutamos y acompañamos proyectos ambientales para organizaciones públicas y privadas, con experiencia técnica y trabajo en territorio.",
	},
	{
		route: "/servicios/forestales",
		title: "Servicios Forestales en Colombia | Ancestral",
		description:
			"Acompañamos proyectos de manejo, intervención, recuperación y conservación de recursos forestales con conocimiento técnico y experiencia en campo.",
	},
	{
		route: "/servicios/agricolas",
		title: "Servicios Agrícolas en Colombia | Ancestral",
		description:
			"Desarrollamos soluciones para proyectos agrícolas mediante asesoría técnica, preparación de tierras, infraestructura, caracterización de suelos y apoyo operativo.",
	},
	{
		route: "/servicios/recurso-hidrico",
		title: "Manejo del Recurso Hídrico en Colombia | Ancestral",
		description:
			"Acompañamos proyectos de planificación, protección y manejo sostenible del recurso hídrico, incluyendo acuíferos, vertimientos, cuencas y cauces.",
	},
	{
		route: "/servicios/seguridad-salud-trabajo",
		title: "Seguridad y Salud en el Trabajo | Ancestral",
		description:
			"Diseñamos, implementamos y fortalecemos sistemas de Seguridad y Salud en el Trabajo, auditorías y procesos de gestión para organizaciones públicas y privadas.",
	},
] as const;

describe("SEO configuration", () => {
	it("defines the approved Home metadata", () => {
		expect(homeSeo).toEqual({
			title: "Ancestral | Servicios Ambientales en Colombia",
			description:
				"Formulamos, asesoramos y ejecutamos proyectos ambientales, forestales, agrícolas, hídricos y de seguridad y salud en el trabajo en Colombia.",
		});
		expect(getSeoMetadata("/")).toMatchObject(homeSeo);
		expect(SOCIAL_IMAGE_URL).toBe(
			"https://ancestral-col.com/images/social/ancestral-social-preview.jpg"
		);
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

		expect(organization).toMatchObject({
			"@type": "Organization",
			name: ORGANIZATION_NAME,
			url: "https://ancestral-col.com/",
			telephone: "+57 316 411 4933",
			areaServed: { "@type": "Country", name: "Colombia" },
		});
		expect(organization.logo).toMatch(/^https:\/\/ancestral-col\.com\//);
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

		expect(serviceSchema).toMatchObject({
			"@type": "Service",
			name: service.name,
			description: service.seo.description,
			url: createCanonicalUrl(service.route),
			areaServed: { "@type": "Country", name: "Colombia" },
			provider: { "@type": "Organization", name: ORGANIZATION_NAME },
		});
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
