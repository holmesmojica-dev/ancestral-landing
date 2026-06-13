# Testing Strategy

## Overview

Ancestral Landing uses automated testing to ensure component reliability, application stability, and confidence during future changes.

The testing strategy focuses on validating the behavior of components and user-visible functionality.

---

## Testing Stack

The project uses the following testing tools:

### Vitest

Vitest is the main testing framework responsible for running unit and component tests.

### React Testing Library

React Testing Library is used to render components and validate the application behavior from the user's perspective.

Tests focus on what users can see and interact with rather than implementation details.

### jsdom

jsdom provides a browser-like environment that allows React components to be tested outside a real browser.

---

## Testing Philosophy

Tests should follow these principles:

- Validate user-facing behavior.
- Avoid testing implementation details.
- Keep tests simple and maintainable.
- Ensure components can evolve without unnecessary test failures.

The goal is to guarantee confidence when refactoring or adding new features.

---

## Running Tests

Execute the complete test suite:

```bash
npm run test:run
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

---

## Coverage Reports

Generate a test coverage report:

```bash
npm run coverage
```

Coverage reports help identify untested areas and improve overall reliability.

---

## CI Integration

Automated tests are executed as part of the Frontend Quality Validation workflow.

The CI pipeline ensures that:

- All tests pass successfully.
- The application can be built.
- Code quality standards are maintained.

A Pull Request cannot be merged into the protected `main` branch if required validations fail.

---

## Future Improvements

The testing strategy can evolve to include additional quality practices such as:

- End-to-end testing.
- Visual regression testing.
- Performance testing.
- Accessibility testing.

The current foundation allows the testing ecosystem to grow while maintaining the existing quality standards.
