# Contributing Guidelines

## Branching Strategy

The project follows an issue-driven development workflow.

Each change starts with a GitHub Issue and is implemented in an isolated
branch.

Branch naming conventions:

### Features

```text
feature/ancestral-landing/feature-description
```

Example:

```text
feature/ancestral-landing/add-contact-form
```

### Fixes

```text
fix/ancestral-landing/fix-description
```

Example:

```text
fix/ancestral-landing/correct-navbar-scroll-behavior
```

### CI/CD changes

```text
ci/ancestral-landing/change-description
```

Example:

```text
ci/ancestral-landing/configure-github-pages-deployment
```

---

## Conventional Commits

The project follows the Conventional Commits specification.

Examples:

```text
feat: add contact form section

fix: correct Bootstrap custom gutter interpolation

docs: add frontend architecture documentation

ci: configure GitHub Actions workflow
```

Commit messages are used by the automated release process to determine
semantic version changes.

---

## Pull Request Workflow

All changes must be integrated into the `main` branch through Pull
Requests.

The workflow is:

```text
GitHub Issue
       ↓
Create Branch
       ↓
Develop Changes
       ↓
Commit Changes
       ↓
Push Branch
       ↓
Open Pull Request
       ↓
Automatic Validation
       ├── Frontend Quality Validation
       └── SonarCloud Quality Gate
       ↓
Review and Approval
       ↓
Squash and Merge
       ↓
Semantic Release
       ↓
Production Deployment
```

Direct commits to the `main` branch are restricted by repository
protection rules.

---

## Repository Standards

The repository enforces the following standards:

- Pull Requests are required before merging.
- Automatic quality checks must pass.
- Force pushes to `main` are blocked.
- A linear Git history is maintained using Squash and Merge.

These rules ensure a reliable and professional software delivery
workflow.

## Documentation synchronization

Changes that alter public routes, contact behavior, environment
variables, SEO output, responsive contracts, deployment behavior, or
production architecture must update the corresponding documentation in
the same pull request.

The canonical V2 product specifications remain under `docs/v2/`;
implementation and operational documents must describe the behavior that
is actually deployed rather than a superseded issue stage.
