# Frontend Architecture

## Overview

Ancestral Landing is a modern frontend application built with React, TypeScript, and Vite. The project follows a modular architecture focused on component reusability, maintainability, and scalability.

The application is structured around reusable UI components, independent page sections, centralized configuration, and a customizable SCSS styling system.

---

## Project Structure

The frontend source code is organized as follows:

```text
src/
├── assets/
├── components/
├── config/
├── pages/
├── sections/
├── styles/
├── tests/
├── App.tsx
└── main.tsx
```

### Assets

Contains static resources used by the application, such as images, icons, and other frontend resources.

### Components

Contains reusable UI elements that can be shared across different sections or pages.

Examples:

- Header
- Footer
- Navbar
- Buttons
- Cards
- Widgets

### Sections

Contains complete and independent blocks that compose the landing page.

Examples:

- Home
- About Us
- Why Us
- Services
- Contact

Each section is responsible for its own presentation and business information.

### Configuration

The application follows a configuration-driven approach where common information is centralized in configuration files.

Examples:

- Navigation menu items
- Section identifiers
- Application constants

This approach reduces duplicated information and simplifies future modifications.

---

## Styling Architecture

The project uses SCSS as the main styling solution combined with Bootstrap.

The styling strategy includes:

- Modular SCSS organization.
- Design variables and reusable utilities.
- Bootstrap customization and extensions.
- Responsive design principles.

Custom Bootstrap utilities were implemented to extend the default spacing system, including additional gutter classes:

- `g-6` to `g-9`
- `gx-6` to `gx-9`
- `gy-6` to `gy-9`

This provides additional flexibility for responsive layouts while maintaining Bootstrap conventions.

---

## Component Design Principles

The frontend architecture follows these principles:

- Separation of concerns.
- Reusable components.
- Configuration-driven behavior.
- Maintainable styling.
- Responsive-first development.

This architecture allows the project to grow while keeping the codebase organized and easy to maintain.
