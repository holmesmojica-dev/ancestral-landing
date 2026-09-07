# Frontend Architecture

## Overview

Ancestral Landing V2 is a React, TypeScript, Vite, and React Router single-page frontend. Its current implementation contains the technical foundation and the approved opening composition for Issue #117. Later home sections and service-detail content remain staged work within Issue #117.

The architecture is intentionally small. Bootstrap provides the grid, containers, responsive layout, and common utilities. SCSS owns Ancestral's visual identity and component contracts.

## Source structure

```text
src/
├── assets/       # Approved V2 brand, service, partner, and photography assets
├── components/   # Reusable visual and semantic primitives
├── config/       # Typed canonical navigation and service data
├── pages/        # Route-level composition
├── styles/       # Tokens, Bootstrap integration, base rules, and component styles
├── tests/        # Shared test setup and infrastructure tests
├── types/        # Shared domain-oriented TypeScript contracts
├── App.tsx
└── main.tsx
```

The dependency direction is composition toward reusable foundations:

```text
App → pages → components → shared types/configuration
```

Lower-level components do not import pages. Configuration contains data and stable identifiers, not React components or page-composition instructions.

## Application shell

`main.tsx` provides the browser router using Vite's configured base path. `App.tsx` owns the shared accessible shell, persistent Header, main landmark, and route table: the home route renders `HomePage`, while the shared `/servicios/:serviceSlug` route shape is reserved for the future reusable service-detail experience without implementing its content prematurely.

`HomePage` currently composes the Header-adjacent opening experience: Hero, experience indicators, and About. The indicators bridge the Hero photography into the dark About surface without changing their semantic independence. Services, Environmental Compensation, Contact, Footer, and service-detail content remain outside the current implementation.

## Configuration

`navigation.ts` is the single source of truth for the four approved primary navigation items. `services.ts` defines exactly the five approved service categories, stable slugs/routes, supplied icon variants, and replaceable development photography.

Environmental Compensation is intentionally not modeled as a sixth service. It remains a transversal experience and impact narrative defined by the V2 content architecture.

## Styling architecture

```text
src/styles/
├── abstracts/              # Color, typography, spacing, responsive, and shared tokens
├── base/                   # Global document foundations
├── components/             # Reusable component contracts
├── utilities/              # Small, generic project utilities
├── bootstrap-extensions.scss
└── index.scss              # Explicit style entry point
```

The Bootstrap customization uses the canonical V2 palette, Poppins, a 4 px spacing base, and layout breakpoints aligned with the documented reference modes:

- Mobile: below 768 px
- Tablet: 768 px and above
- Desktop: 1024 px and above
- Large screen: 1440 px and above

Component styles are mobile-first and use shared tokens. Final section-specific styles will be added with their sections in Issue #117.

## Assets

Approved logos are consumed from `src/assets/images/logo/`, and service configuration imports the supplied category icons from `src/assets/icons/services/`. Partner marks and V2 photography remain organized by content role. These files must not be reconstructed or replaced with approximations.

Lucide remains the standard dependency for future generic functional icons. It does not replace the supplied service-category assets.
