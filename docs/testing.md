# Testing Strategy

## Overview

Ancestral Landing uses Vitest, React Testing Library, `@testing-library/jest-dom`, and jsdom. Tests prioritize observable behavior, accessible roles and names, and stable content/configuration contracts.

## Test organization

- Reusable component tests are colocated with their components.
- Application-shell tests remain near `App.tsx`.
- Configuration tests are colocated with their typed data modules.
- `src/tests/setup.ts` contains only setup shared by the active test suite.

The V2 foundation tests currently protect:

- The accessible application shell and skip navigation.
- Supplied brand-asset selection.
- Reusable action and section-heading semantics.
- The approved navigation order and destinations.
- Exactly five canonical service definitions, stable routes, and supplied asset associations.
- The rule that Environmental Compensation is not a service category.

Issue #117 tests should cover each final section's user-visible behavior without duplicating every child-component assertion.

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

Coverage is written to `coverage/` as text, HTML, and LCOV output. Tests must not be added only to inflate a metric; they should protect meaningful behavior or contracts.

## Manual validation

Automated tests do not replace manual responsive and accessibility review. Final V2 sections must also be reviewed at the viewport matrix defined in `docs/v2/responsive-design.md`, including keyboard focus, reduced motion, image crops, text reflow, and intermediate widths.
