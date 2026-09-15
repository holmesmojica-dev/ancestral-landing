# Frontend Optimization

## Status

Ancestral Landing V2 is implemented and deployed in production. The
repository's historical quality images remain useful evidence, but
screenshots must be interpreted according to the version they captured.
They are not automatically a current acceptance result.

When the images under `docs/quality/` are refreshed, keep the existing
documentation paths stable so the repository continues to render the
quality evidence without changing this document solely for new
screenshots.

## Current optimization foundation

The production V2 implementation supports performance, accessibility,
and maintainability through:

- Strict TypeScript, ESLint, Prettier, Vitest, and SonarCloud
  validation.
- Poppins as the single application font family.
- Bootstrap as the shared layout foundation rather than a parallel UI
  framework.
- Reusable SCSS tokens and component contracts.
- Build-time prerendering for Home and the five canonical service
  routes.
- Route-specific SEO metadata and structured data.
- Content-bearing images organized as application assets with
  intentional responsive behavior.
- Reduced-motion defaults and visible accessible focus treatment.
- A production contact flow integrated with Cloudflare Turnstile and
  the Ancestral API.
- Independent frontend/API deployment boundaries so backend delivery
  does not inflate the static frontend runtime.

## Quality evidence

The screenshots stored under `docs/quality/` should be kept as
repository evidence and replaced with captures from the current
production V2 build whenever a new baseline is recorded.

Do not treat a screenshot filename or an old score as authoritative by
itself. The production URL, capture date, viewport/profile, and relevant
build/release should be recorded alongside any refreshed result.

## V2 validation baseline

Performance and accessibility review should cover the deployed
production build at minimum on mobile and desktop. Review:

- Largest Contentful Paint and Hero image delivery.
- Cumulative Layout Shift from images, fonts, CAPTCHA, and responsive
  composition.
- JavaScript and CSS payloads, including Bootstrap usage.
- Font loading and rendering.
- Contact, Turnstile, and other third-party integration cost.
- Prerendered initial HTML and hydration behavior.
- WCAG AA contrast, semantic landmarks, accessible names, and heading
  hierarchy.
- Keyboard navigation and focus visibility.
- Reduced-motion behavior.
- Responsive image crops and intermediate-width reflow.
- Real 404 behavior and service-route rendering.

## Contact and third-party cost

Cloudflare Turnstile is part of the approved production contact flow.
Optimization must not remove, weaken, or bypass CAPTCHA behavior merely
to improve synthetic performance scores.

Measure the Contact section with the real integration architecture in
mind. Prefer improvements that reduce unnecessary work while preserving
security, accessibility, and reliable submission feedback.

## Optimization policy

Optimization decisions must be based on measured impact. Approved brand
assets, accessibility, security, SEO correctness, and maintainability
must not be sacrificed for negligible score changes.

When a refreshed Lighthouse or equivalent baseline is added under
`docs/quality/`, replace the outdated image assets with current
production captures while preserving the documentation references used
by the repository.
