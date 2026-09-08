# Organic SEO

## Production scope

The canonical production origin is `https://ancestral-col.com`. Organic SEO is enabled for exactly
six public routes:

- `/`
- `/servicios/ambientales`
- `/servicios/forestales`
- `/servicios/agricolas`
- `/servicios/recurso-hidrico`
- `/servicios/seguridad-salud-trabajo`

Unknown routes are not part of the prerender list or sitemap. The client marks an unknown route as
`noindex,follow` before the existing service fallback navigation completes.

## Build-time architecture

`npm run build` creates the normal Vite client bundle and a temporary server bundle. The temporary
bundle renders the React application and route-specific head for each public route, writes a static
`index.html` at the matching output path, generates `sitemap.xml`, and is then deleted. There is no
Node.js server, bot detection, dynamic rendering, or runtime SSR in production.

The browser hydrates prerendered markup and retains the existing React Router SPA behavior. During
client navigation, `SeoMetadata` updates the document title, description, robots directive,
canonical link, Open Graph fields, Twitter/X fields, and JSON-LD.

## Configuration

Global values live in `src/config/seo.ts`, including the production origin, site and organization
names, Home metadata, social image, common metadata, structured data, indexable routes, and sitemap
generation. Each service owns its typed `seo.title` and `seo.description` in
`src/config/services.ts`; its canonical URL and other repeated fields are derived rather than
duplicated.

The shared social preview is the approved
`public/images/social/ancestral-social-preview.jpg`. The Organization schema uses the existing full
corporate logo source; Vite publishes that real asset and the generated schema converts its output
path to an absolute production URL.

## Metadata and structured data

Every indexable route includes:

- a unique title and description;
- `index,follow`;
- an absolute canonical URL;
- Open Graph `website`, `es_CO`, site, route, and image fields;
- Twitter/X large-image summary fields;
- Spanish document language (`lang="es"`).

Home publishes an `Organization` and `WebSite` graph. Service pages publish a route-specific
`Service` whose provider is the same Organization and whose service area is Colombia. Structured
data is limited to verified institutional information; it does not claim ratings, reviews, prices,
certifications, awards, clients, hours, or social profiles.

`public/robots.txt` allows public crawling and points to
`https://ancestral-col.com/sitemap.xml`. The generated sitemap contains only the six canonical URLs
and intentionally omits unverifiable historical `lastmod` dates.

## Adding an indexable route

For a service, add its real route, content, and typed SEO block to the existing service definition.
The prerender list, route metadata, service schema, and sitemap then derive from that configuration.
For a future non-service route, add an explicit route-specific SEO definition and include the route
in `indexableRoutes`; do not fall back to Home metadata.

Before merging, build the project and inspect the generated HTML for title, description, canonical,
robots, social metadata, JSON-LD, Spanish language, and meaningful initial content.

## Post-deployment checks for Issue #120

The following checks are **pending post-deployment** and must not be considered completed by the
local build:

1. Configure and verify Nginx so each generated route serves its matching static HTML directly and
   unknown routes return a genuine non-indexable 404 instead of the Home document.
2. Confirm all six canonical URLs, `robots.txt`, and `sitemap.xml` over production HTTPS.
3. Validate Home and service JSON-LD with a live structured-data testing tool.
4. Verify the site in Google Search Console and Bing Webmaster Tools.
5. Submit the production sitemap to both webmaster platforms.
6. Run live URL inspection/crawler tests for Home and every service page.
7. Validate Open Graph and Twitter/X previews against the deployed social image.
8. Monitor indexing and canonical selection after crawlers have processed the deployment.
