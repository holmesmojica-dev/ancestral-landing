# Frontend Architecture

## Overview

Ancestral Landing V2 is the production React, TypeScript, Vite, and
React Router frontend for Ancestral Servicios Ambientales. The
implementation contains the complete approved V2 experience: the Home
page, five reusable service-detail routes, responsive navigation,
production contact integration, prerendered SEO output, and the shared
visual/component foundation.

The architecture remains intentionally focused. Bootstrap provides the
grid, containers, responsive layout, and common utilities. SCSS owns
Ancestral's visual identity and component contracts. Typed configuration
centralizes canonical navigation, service, contact, trusted-entity, and
SEO data.

## Source structure

```text
src/
├── assets/       # Approved V2 brand, service, partner, and photography assets
├── components/   # Reusable visual, semantic, navigation, contact, and service primitives
├── config/       # Typed canonical navigation, service, contact, trusted-entity, and SEO data
├── pages/        # Route-level Home and Service Detail composition
├── styles/       # Tokens, Bootstrap integration, base rules, utilities, and component styles
├── tests/        # Shared test setup and infrastructure tests
├── types/        # Shared domain-oriented TypeScript contracts
├── App.tsx
└── main.tsx
```

The dependency direction is composition toward reusable foundations:

```text
App → pages → components → shared types/configuration
```

Lower-level components do not import pages. Configuration contains
canonical data and stable identifiers rather than page-composition
instructions.

## Application shell and routing

`main.tsx` initializes the browser application using Vite's configured
base path. `App.tsx` owns the accessible application shell, shared
navigation behavior, main landmark, and route table.

The public production experience exposes Home plus the five canonical
service routes:

```text
/
/servicios/ambientales
/servicios/forestales
/servicios/agricolas
/servicios/recurso-hidrico
/servicios/seguridad-salud-trabajo
```

Service pages use a shared route-level experience driven by typed
service configuration instead of duplicating page structure.

## Home composition

The Home page contains the approved V2 narrative and conversion flow,
including the responsive Header, Hero, trust/experience content,
institutional content, service overview, Environmental
Compensation/territorial-impact content, trusted entities, Contact, and
Footer.

Environmental Compensation is intentionally not modeled as a sixth
service. It remains a transversal experience and impact narrative
defined by the V2 content architecture.

## Contact integration

The Contact UI is integrated with the production Ancestral API rather
than operating as a UI-only placeholder.

Frontend responsibilities include:

- collecting and validating the approved form data;
- rendering Cloudflare Turnstile with the environment-specific public
  Site Key;
- sending the CAPTCHA token in the request body together with the
  contact payload;
- submitting to the configured API origin;
- exposing accessible pending, success, validation, and failure
  states;
- never embedding the Turnstile Secret Key or API secrets in `VITE_*`
  configuration.

The API independently performs server-side validation, Turnstile
verification, rate limiting, and transactional email delivery.

## SEO and prerendering

The production build prerenders Home and all five service routes.
Route-specific metadata, canonical URLs, social metadata, JSON-LD,
`robots.txt`, and `sitemap.xml` are generated from typed configuration.

The browser hydrates the prerendered output and retains React Router
client navigation. Unknown routes are not treated as Home and production
Nginx preserves a genuine HTTP 404.

See [`docs/v2/seo.md`](./v2/seo.md) for the SEO contract.

## Styling architecture

```text
src/styles/
├── abstracts/              # Color, typography, spacing, responsive, and shared tokens
├── base/                   # Global document foundations
├── components/             # Reusable component contracts
├── utilities/              # Small generic project utilities
├── bootstrap-extensions.scss
└── index.scss              # Explicit style entry point
```

The Bootstrap customization uses the canonical V2 palette, Poppins,
shared spacing tokens, and the documented responsive modes:

- Mobile: below 768 px
- Tablet: 768 px and above
- Desktop: 1024 px and above
- Large screen: 1440 px and above

Component styles are mobile-first and use shared tokens. Accessibility
states, reduced-motion behavior, and responsive reflow are part of the
component contracts rather than post-processing concerns.

## Assets

Approved logos are consumed from `src/assets/images/logo/`, and service
configuration imports the supplied category icons from
`src/assets/icons/services/`. Partner marks and V2 photography remain
organized by content role.

Lucide is used for generic functional iconography. It does not replace
supplied brand or service-category assets.

## Production boundary

The Landing is deployed independently from `ancestral-api`. The frontend
is static production output served by Nginx, while contact requests
target `https://api.ancestral-col.com`.

Deployment topology, immutable releases, smoke tests, and rollback
behavior are documented in
[`docs/v2/deployment.md`](./v2/deployment.md).
