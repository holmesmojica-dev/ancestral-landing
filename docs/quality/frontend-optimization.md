# Frontend Optimization

## Status

The historical Lighthouse screenshots and scores in this repository describe Ancestral Landing V1. They remain project evidence, but they are not a V2 baseline or acceptance result.

Issue #116 establishes a clean V2 technical foundation. A new performance and accessibility baseline must be recorded after Issue #117 implements the approved V2 sections and the application can be assessed as a complete experience.

## Foundation decisions

The V2 foundation supports future optimization by:

- Keeping strict TypeScript, ESLint, Prettier, Vitest, and SonarCloud validation active.
- Removing obsolete V1 runtime dependencies and font families.
- Loading only the four approved Poppins weights currently defined by the design system.
- Keeping Bootstrap as the shared layout foundation rather than adding a parallel UI framework.
- Organizing content-bearing images in React-importable asset folders.
- Keeping service photography replaceable while client approval is pending.
- Avoiding final section code and third-party integrations before their implementation issues.
- Providing reduced-motion defaults and accessible focus treatment.

## V2 validation plan

After the final V2 sections exist, record mobile and desktop Lighthouse runs against the deployed production build. Review at minimum:

- Largest Contentful Paint and Hero image delivery.
- Cumulative Layout Shift from images, fonts, and responsive composition.
- JavaScript and CSS payloads, including Bootstrap usage.
- Font loading and rendering.
- Contact, CAPTCHA, map, and other third-party integration cost.
- WCAG AA contrast, semantic landmarks, accessible names, and heading hierarchy.
- Keyboard navigation, focus visibility, and reduced-motion behavior.

Optimization decisions should be based on measured impact. Approved brand assets, accessibility, and maintainability must not be sacrificed for negligible score changes.
