# Testing Strategy

## Overview

Ancestral Landing uses Vitest, React Testing Library,
`@testing-library/jest-dom`, and jsdom. Tests prioritize observable
behavior, accessible roles and names, stable content/configuration
contracts, routing, and production-facing integration behavior that can
be validated deterministically in the frontend.

## Test organization

- Reusable component tests are colocated with their components.
- Application-shell tests remain near `App.tsx`.
- Configuration tests are colocated with their typed data modules.
- Shared test setup lives in `src/tests/setup.ts`.
- Integration-oriented frontend tests mock external boundaries rather
  than contacting production services.

## V2 coverage responsibilities

The current V2 suite should protect, as applicable:

- Accessible application shell and skip navigation.
- Approved brand-asset selection.
- Reusable action and section-heading semantics.
- Canonical navigation order, destinations, and responsive-menu
  interaction.
- Exactly five canonical service definitions and stable service
  routes.
- The rule that Environmental Compensation is not a sixth service.
- Home Hero, institutional, services, impact, trusted-entity, Contact,
  and Footer behavior.
- Shared Service Detail behavior for all five official service routes.
- Contact form validation and submission states.
- Cloudflare Turnstile frontend lifecycle and CAPTCHA-token handling.
- API request construction without exposing private configuration.
- Accessible success, validation, service-unavailable, and generic
  failure feedback.
- Route-specific SEO/prerendering contracts where covered by automated
  tests.
- Reduced-motion and accessibility-sensitive component behavior where
  deterministic.

Tests should protect user-visible behavior and stable contracts without
duplicating implementation details or every child-component assertion.

## Commands

Run the complete suite once:

```bash
npm run test:run
```

Run in watch mode:

```bash
npm run test:watch
```

Generate the V8 coverage reports consumed by SonarCloud:

```bash
npm run coverage
```

Coverage is written to `coverage/` as text, HTML, and LCOV output. Tests
must not be added only to inflate a metric; they should protect
meaningful behavior or contracts.

## Pull-request quality sequence

Before opening or updating a pull request, run:

```bash
npm run format:check
npm run lint
npm run test:run
npm run coverage
npm run build
```

CI and SonarCloud remain authoritative for repository quality gates.

## Manual validation

Automated tests do not replace manual responsive, accessibility,
CAPTCHA, and production-integration review.

For relevant changes, manually validate the viewport matrix defined in
`docs/v2/responsive-design.md`, including keyboard focus, reduced
motion, image crops, text reflow, intermediate widths, Contact
submission states, and Turnstile behavior.

Production contact-flow acceptance must validate the real deployed
Landing → API → Turnstile → email path without exposing secrets in logs,
screenshots, source control, or browser configuration.
