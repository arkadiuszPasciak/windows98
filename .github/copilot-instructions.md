# Copilot Instructions for AI Agents

Welcome to the Windows98 monorepo! This project is a modern, browser-based recreation of Windows98, structured as a portfolio and development sandbox. Follow these guidelines to be productive as an AI coding agent in this codebase.

## Repository

The repository is structured as a monorepo, with multiple packages and services organized into workspaces. Each workspace is responsible for a specific part of the application, following best practices for modularity and separation of concerns.

### Requirements

1. Node.js 22.19.0
2. PNPM 10.16.1

### Workspaces

| Name | Source | Description |
|---|---|---|
| @windows98/app | ./app | Main app: boots micro-frontends and micro-services |
| @windows98/micro-frontends | ./micro-frontends | Micro-frontends |
| @windows98/micro-services | ./micro-services | Micro-services |
| @windows98/docs | ./docs | Storybook-based documentation and guides |
| @windows98/ci-cd | ./core/ci-cd | CI/CD and automation scripts |
| @windows98/configs | ./core/configs | Shared configuration files and linter setups |
| @windows98/design-system | ./design-system | Windows98 Design System |
| @windows98/i18n | ./internationalization/i18n | Internationalization and multi-language support |
| @windows98/toolkit | ./toolkit | Shared utilities, types, and helpers |

## Instructions

### Create a new micro-frontend

**Workspace:** `@windows98/micro-frontends`
**Prefix:** `mf-`
**Location:** `micro-frontends/src/mf-<name>`
**Export:** Add export in `micro-frontends/src/index.ts` from the main view file (e.g., `src/mf-<name>/src/ui/views/<name>.view.tsx`).

**Steps:**
1. Create a new directory under `micro-frontends/src/` with the prefix `mf-` (e.g., `mf-example`).
2. Structure your micro-frontend as a React component, following the pattern in other `mf-*` folders. Place main UI in `src/ui/views/`.
3. Add all logic, assets, and styles inside your micro-frontend folder. Use subfolders for `ui`, `logic`, `assets`, etc.
4. Export your main view/component in `micro-frontends/src/index.ts` using the `MF<Name>` convention (e.g., `export { ExampleView as MFExample } from "./mf-example/src/ui/views/example.view"`).
5. If your micro-frontend needs translations, see the translation instructions below.
6. Add or update tests in `micro-frontends/@test/` as needed.
7. Run `pnpm run dev` in the `micro-frontends` workspace to test your component in isolation.
8. Ensure code style and linting by running the provided lint scripts.

**Notes:**
- All micro-frontends are React-based and use the Windows98 Design System.
- Peer dependencies include `react`, `mobx`, `@windows98/design-system`, and `@windows98/micro-services`.
- Use the `vite` dev server for local development.

### Create a new micro-service

**Workspace:** `@windows98/micro-services`
**Prefix:** `ms-`
**Location:** `micro-services/src/ms-<name>`
**Export:** Add export in `micro-services/src/index.ts` from the main domain entry (e.g., `src/ms-<name>/src/index.ts`).

**Steps:**
1. Create a new directory under `micro-services/src/` with the prefix `ms-` (e.g., `ms-example`).
2. Structure your service using clean architecture: separate `domain`, `data`, and `ui` (if needed) folders.
3. Place main service logic in `src/domain/` and expose the public API via `src/index.ts`.
4. Export your service in `micro-services/src/index.ts` (e.g., `export * from "./ms-example/src"`).
5. Add or update unit tests in `micro-services/@test/` as needed.
6. Run `pnpm run dev` in the `micro-services` workspace to test your service.
7. Ensure code style and linting by running the provided lint scripts.

**Notes:**
- All micro-services are TypeScript-based and follow clean architecture principles.
- Use the `vite` dev server for local development.

### Implement a micro-frontend in the app

**Workspace:** `@windows98/app`
**Prefix:** None
**Location:** `app/src/presentation/` (typically in `components/`, `containers/`, `layouts/`, or `views/`)

**Steps:**
1. Import the micro-frontend from `@windows98/micro-frontends` (e.g., `import { MFExample } from "@windows98/micro-frontends"`).
2. Integrate the component into the appropriate layout, view, or container (e.g., add to `PulpitLayout`, `NavigationLayout`, or a specific view in `app/src/presentation/views/`).
3. If configuration is needed, update the relevant config in `app/src/infrastructure/configs/` (e.g., `pulpit.config.ts`, `start-menu.config.ts`).
4. If translations are needed, ensure the translation keys exist in the i18n workspace.
5. Test the integration by running `pnpm run dev` in the `app` workspace.
6. Ensure code style and linting by running the provided lint scripts.

**Notes:**
- The app orchestrates all micro-frontends and micro-services.
- Use the Windows98 Design System for consistent UI.

### Create a new toolkit item

**Workspace:** `@windows98/toolkit`
**Prefix:** None
**Location:** `core/toolkit/src/<decorators|helpers|types|utils>/`
**Export:** Add export in `core/toolkit/src/index.ts`.

**Steps:**
1. Decide if your item is a decorator, helper, type, or util. Place it in the corresponding folder.
2. Create a new file in the appropriate directory (e.g., `core/toolkit/src/helpers/my-helper.ts`).
3. Export your item in `core/toolkit/src/index.ts` (e.g., `export * from "./helpers/my-helper"`).
4. Add or update unit tests in `core/toolkit/**/*` as needed.
5. Run lint and type checks using the provided scripts.

**Notes:**
- Toolkit items are shared across all workspaces.
- Use TypeScript best practices and keep items generic and reusable.


### Create a component in the Design System

**Workspace:** `@windows98/design-system`
**Location:** `core/design-system/src/components/<ComponentName>/`
**Export:** Add export in `core/design-system/src/index.ts` and/or `core/design-system/src/components/index.ts`.

**Steps:**
1. Create a new directory for your component under `core/design-system/src/components/` (e.g., `Button/`).
2. Implement your component as a React functional component. Use TypeScript for all code and props typing.
3. Add styles in a colocated CSS file or use the design system's styling conventions.
4. Add Storybook stories in `core/design-system/src/components/<ComponentName>/<ComponentName>.stories.tsx` to document and showcase the component.
5. Add or update unit/UI tests in `core/design-system/@test/` as needed.
6. Export your component in `core/design-system/src/components/index.ts` and, if needed, in the main `index.ts`.
7. Run `pnpm run test:ui:run` in the `design-system` workspace to test and develop your component in isolation.
8. Run lint, type, and test scripts to ensure code quality and consistency.

**Notes:**
- All components must follow the Windows98 visual style and accessibility guidelines.
- Use only dependencies already present in the workspace unless absolutely necessary.
- Document all props and usage examples in Storybook.
- Ensure your component is reusable and composable.

### Create translations

**Workspace:** `@windows98/i18n`
**Prefix:** `mf-` for micro-frontends
**Location:** `core/internationalization/i18n/src/locales/micro-frontends/<lang>/mf-<name>.locale.json`
**Export:** Import and spread in the language's `index.ts` (e.g., `core/internationalization/i18n/src/locales/micro-frontends/en/index.ts`).

**Steps:**
1. For each new micro-frontend, create a translation file for each language (`en`, `de`, `pl`) in the appropriate folder.
	- Example: `core/internationalization/i18n/src/locales/micro-frontends/en/mf-example.locale.json`
2. Add your translation keys and values in each file.
3. Import your new translation file in the language's `index.ts` and spread it into the export object.
	- Example: `import exampleEN from "./mf-example.locale.json"` and add `...exampleEN,` to the export object.
4. Ensure the translation keys are consistent across all languages.
5. Update the main `index.config.ts` to ensure your translations are included in the global locales object if needed.
6. Test language switching in the app to verify your translations appear correctly.

**Notes:**
- All translations must be provided for English, German, and Polish.
- Translation files are JSON and should use flat key-value pairs.
- The i18n system is based on `i18next` (not Vue).
