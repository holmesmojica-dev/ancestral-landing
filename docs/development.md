# Development Workflow

## Requirements

- Node.js 22, matching GitHub Actions
- npm 10 or newer

## Installation

Install the locked dependency graph:

```bash
npm ci
```

Use `npm install` only when intentionally changing dependencies and
commit the resulting `package-lock.json` update with that change.

## Local development

Start Vite with hot module replacement:

```bash
npm run dev
```

The configured production base path is the domain root (`/`).

## Production build and preview

```bash
npm run build
npm run preview
```

The build command performs strict TypeScript project compilation before
producing the Vite bundle.

## Quality validation

Run the same local checks expected by the quality pipeline:

```bash
npm run format:check
npm run lint
npm run test:run
npm run coverage
npm run build
```

Use `npm run format` to apply Prettier formatting. Husky and lint-staged
preserve the same formatting and linting conventions for staged source
files.

## V2 implementation rules

- Review `docs/v2/content-architecture.md`,
  `docs/v2/design-system.md`, and `docs/v2/responsive-design.md`
  before implementing a section.
- Keep strict TypeScript enabled.
- Use Bootstrap for generic grid, container, responsive, and spacing
  behavior.
- Use shared SCSS tokens and semantic component classes for
  Ancestral-specific presentation.
- Keep canonical navigation and service data in typed configuration.
- Preserve exactly five service categories; Environmental Compensation
  is not a sixth service.
- Reuse the supplied brand, service-icon, partner, and photography
  assets.
- Add dependencies only when the browser platform, React, Bootstrap,
  or the existing toolchain cannot solve the requirement cleanly.

The complete V2 experience is implemented. New work should preserve the
approved content, design, responsive, SEO, and production contracts
unless the corresponding source-of-truth document is intentionally
revised.

## Environment configuration

Copy `.env.example` to `.env.local` for local development.

`VITE_TURNSTILE_SITE_KEY` is public frontend configuration. Local
development may use Cloudflare's public test Site Key; production builds
must receive the production Site Key.

`VITE_API_BASE_URL` identifies the Ancestral API origin and must not
include `/api/contact`.

Never place the Turnstile Secret Key, SMTP credentials, API credentials,
or any other private value in a `VITE_*` variable. Vite embeds these
values in the browser bundle.

## Contact integration

The Contact form is a real integration boundary. When modifying it,
preserve the API payload contract, CAPTCHA token flow, accessible
pending/success/error feedback, and the distinction between frontend
validation and authoritative backend validation.

Production API behavior is owned by the independently deployed
`ancestral-api` service.
