# CI/CD, Code Quality and Deployment

## Overview

Ancestral Landing implements an automated Continuous Integration and Continuous Deployment (CI/CD) pipeline designed to ensure code quality, maintainability, automated releases, and reliable production deployments.

The delivery lifecycle is powered by GitHub Actions and integrates automated validation, static analysis, semantic versioning, release generation, and deployment to GitHub Pages.

---

# GitHub Actions Workflows

The project uses multiple automated workflows to validate and deliver software changes.

## Frontend Quality Validation

This workflow validates the frontend codebase before allowing changes to be merged.

Validation steps include:

- Dependency installation using `npm ci`
- TypeScript compilation validation
- Production build validation using Vite
- ESLint static analysis
- Automated test execution with Vitest
- Code formatting verification with Prettier

This workflow guarantees that the application can be built and that the code follows the established quality standards.

---

## SonarCloud Code Analysis

SonarCloud provides continuous code quality inspection.

The analysis includes:

- Code smells detection
- Maintainability analysis
- Quality metrics validation
- Quality Gate verification

The Quality Gate must pass before a Pull Request can be merged into the `main` branch.

---

## Semantic Release

The project uses Semantic Release to automate version management and GitHub Releases.

The release process is based on Conventional Commits.

Examples:

| Commit type       | Version impact |
| ----------------- | -------------- |
| `feat`            | Minor release  |
| `fix`             | Patch release  |
| `BREAKING CHANGE` | Major release  |

Semantic Release automatically:

- Calculates the next version.
- Creates GitHub Releases.
- Generates release notes.
- Updates the `CHANGELOG.md`.

---

## GitHub Pages Deployment

Production deployments are fully automated using GitHub Actions.

After changes are merged into the `main` branch:

1. The application is validated.
2. The production build is generated.
3. The build artifacts are deployed to the GitHub Pages environment.
4. The public website is automatically updated.

The deployment process ensures that production always reflects the latest validated version of the repository.

---

## Branch Protection Rules

The `main` branch is protected to maintain repository stability.

The following rules are enforced:

- Direct pushes are not allowed.
- Pull Requests are required for all changes.
- Force pushes are blocked.
- Required status checks must pass before merging.

Required checks include:

- Frontend Quality Validation
- SonarCloud Code Analysis
- Semantic Release
- Build Application
- Deploy to Production

---

## Development Lifecycle

The software delivery workflow follows this lifecycle:

```text
GitHub Issue
       |
       v
Create Branch
       |
       v
Develop Changes
       |
       v
Commit using Conventional Commits
       |
       v
Open Pull Request
       |
       v
Automatic Validation
       |
       +--> Frontend Quality Validation
       |
       +--> SonarCloud Quality Gate
       |
       v
Merge to main
       |
       v
Semantic Release
       |
       v
Build Production Application
       |
       v
Deploy to GitHub Pages
       |
       v
Production Environment Updated
```

This workflow guarantees that every production deployment has passed automated quality validations and follows the established repository standards.
