# Development Workflow

## Requirements

Before running the project locally, ensure the following tools are installed:

- Node.js
- npm

---

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

For a clean and reproducible installation, especially in CI environments, use:

```bash
npm ci
```

---

## Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available in the local Vite development environment with hot reload enabled.

---

## Production Build

Generate a production-ready build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

This process is recommended to validate that the production output behaves as expected before deployment.

---

## Quality Validation

The project includes automated quality validation scripts.

### Linting

```bash
npm run lint
```

Validates code quality and detects potential issues using ESLint.

### Testing

```bash
npm run test:run
```

Runs the automated test suite using Vitest.

### Coverage

```bash
npm run coverage
```

Generates the test coverage report.

### Code Formatting

Format the code:

```bash
npm run format
```

Verify formatting without modifying files:

```bash
npm run format:check
```

---

## Development Standards

All code contributions should follow the established project standards:

- Write clean and readable code.
- Prefer reusable components.
- Keep sections independent and maintainable.
- Follow the existing project architecture.
- Maintain test coverage.
- Follow ESLint and Prettier rules.
- Use Conventional Commit messages.

These practices ensure consistency across the codebase and support automated CI/CD workflows.
