# Ancestral Landing

Frontend for the institutional website of Ancestral Servicios Ambientales, built with React, TypeScript, Vite, Bootstrap, and SCSS.

The current implementation includes the complete approved Ancestral Landing V2 interface delivered in Issue #117: application routing, responsive navigation, Home sections, the five official service areas, and the reusable Service Detail experience. Contact API integration and CAPTCHA remain intentionally deferred to the integration stage.

## V2 sources of truth

Implementation decisions must follow these canonical specifications:

1. [`docs/v2/content-architecture.md`](./docs/v2/content-architecture.md)
2. [`docs/v2/design-system.md`](./docs/v2/design-system.md)
3. [`docs/v2/responsive-design.md`](./docs/v2/responsive-design.md)

Historical V1 screenshots under `docs/screenshots/` remain project evidence only. They are not a V2 design or architecture reference.

## Technology

| Area             | Technology                                           |
| ---------------- | ---------------------------------------------------- |
| UI               | React 18                                             |
| Routing          | React Router 6                                       |
| Language         | Strict TypeScript                                    |
| Build            | Vite 5                                               |
| Layout           | Bootstrap 5                                          |
| Visual system    | Sass/SCSS                                            |
| Functional icons | Lucide React                                         |
| Tests            | Vitest, React Testing Library, jsdom                 |
| Quality          | ESLint, jsx-a11y, Prettier, SonarCloud               |
| Automation       | GitHub Actions, Husky, lint-staged, semantic-release |

Poppins is the only application font family. Supplied Ancestral logos, service-category icons, partner marks, and V2 photography are kept under `src/assets/` and must not be reconstructed with CSS, text, or generic icon libraries.

## Current foundation

The repository currently provides:

- An accessible routed React application shell compatible with the GitHub Pages base path.
- The approved responsive Header and contextual navigation.
- The complete approved Ancestral Landing V2 Home experience.
- The five official service areas and their reusable Service Detail experience.
- Environmental Compensation and territorial impact content integrated as transversal content.
- The approved Contact UI, including service context and the CAPTCHA placeholder.
- The approved Footer and institutional navigation.
- Reusable brand, action, section, navigation, gallery, and service UI primitives.
- Typed configuration for navigation, services, contact information, and trusted entities.
- Automated component and behavior tests for the implemented V2 experience.

Environmental Compensation is not a sixth service. It remains a transversal experience and impact narrative, as defined by the V2 content architecture.

## Local setup

### Prerequisites

- Node.js 22
- npm 10 or newer

Install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The application uses the `/ancestral-landing/` base path configured for GitHub Pages.

## Commands

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the Vite development server              |
| `npm run build`        | Type-check and create the production bundle    |
| `npm run preview`      | Preview the production bundle locally          |
| `npm run lint`         | Run ESLint and accessibility rules             |
| `npm run format`       | Apply Prettier formatting                      |
| `npm run format:check` | Verify formatting without modifying files      |
| `npm run test:run`     | Run all tests once                             |
| `npm run test:watch`   | Run tests in watch mode                        |
| `npm run coverage`     | Generate text, HTML, and LCOV coverage reports |

Run the complete local quality sequence before opening a pull request:

```bash
npm run format:check
npm run lint
npm run test:run
npm run coverage
npm run build
```

## Architecture

```text
src/
├── assets/
├── components/
├── config/
├── pages/
├── styles/
├── tests/
├── types/
├── App.tsx
└── main.tsx
```

Bootstrap owns generic layout and responsive utilities. Project SCSS owns the Ancestral visual identity. Canonical repeated content is kept in typed configuration and remains separate from React page composition.

See [`docs/architecture.md`](./docs/architecture.md) for the detailed structure.

## Responsive modes

The V2 foundation is mobile-first and uses the documented layout references:

- Mobile: below 768 px
- Tablet: 768 px and above
- Desktop: 1024 px and above
- Large screen: 1440 px and above

These are content-oriented reference modes, not a device whitelist. Components may use a justified content-fit transition when the canonical responsive specification requires it.

## Delivery

GitHub Actions preserves the existing quality, SonarCloud, semantic-release, and GitHub Pages workflows. Pull requests must pass the repository quality checks before merge.

The production application is deployed from `main` to:

<https://holmesmojica-dev.github.io/ancestral-landing/>

## Documentation

- [Frontend architecture](./docs/architecture.md)
- [Development workflow](./docs/development.md)
- [Testing strategy](./docs/testing.md)
- [CI/CD and deployment](./docs/cicd.md)
- [Contributing guidelines](./docs/contributing.md)
- [Frontend optimization](./docs/quality/frontend-optimization.md)

## License

This project is licensed under the [MIT License](./LICENSE).
