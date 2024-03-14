# Linters

Lint, or a linter, is a tool that analyzes source code to identify potential errors, bad practices, style inconsistencies, and other issues that could affect the code's maintainability, readability, or performance. Linters help developers adhere to best practices and coding standards, resulting in clean and reliable codebases.

## Linters Used in the Project

#### [ESLint](https://eslint.org/)

`@/.eslintrc.js`

ESLint is a widely used JavaScript linter that identifies and reports problematic patterns in the code. It is highly configurable and supports custom rules, enabling developers to enforce project-specific coding standards and best practices.

#### [Stylelint](https://stylelint.io/)

`@/.stylelintrc.js`

Stylelint is a linter for CSS and other styling languages, such as SCSS and Less. It helps maintain clean and consistent stylesheets by enforcing a set of rules and best practices. Stylelint can catch errors, enforce conventions, and prevent inconsistencies in our styling code.

#### [Vue-TSC](https://www.npmjs.com/package/vue-tsc)

`no-file`

Vue-TSC is a TypeScript compiler for Vue 3 projects. It type-checks Vue Single File Components (SFCs) and TypeScript files, ensuring that the code is free from type-related issues. By using Vue-TSC, we can catch potential errors early in the development process and maintain a robust and reliable codebase.

#### [Lint-Staged](https://github.com/okonet/lint-staged) in Git Hooks [(Husky)](https://typicode.github.io/husky/#/) on Commit

`@/lint-staged.config.js`

We use lint-staged in combination with Husky to run our linters on staged files during the pre-commit Git hook. Lint-staged ensures that only the files that have been modified and staged for commit are processed by the linters. This speeds up the linting process and prevents unrelated files from being checked. By using lint-staged with Husky, we can enforce code quality and consistency standards, catching and fixing issues before they make their way into the repository.

## Linters in IDE

To complement these linters, we also leverage various VSCode extensions that provide additional functionality, language support, and integration with the linters. [Extensions](/reference/reference/ide-vscode.html#extensions) offering features like real-time linting, error reporting, and automatic code formatting. By utilizing these linters and extensions in our development environment, we ensure a streamlined, efficient, and consistent workflow across the entire team.

## Linters in development mode

The [eslint-plugin-vitest](https://github.com/veritem/eslint-plugin-vitest#readme) in Vitest is a plugin that integrates ESLint, a popular JavaScript linter, into the Vitest testing framework. Vitest is a lightweight and fast testing tool for modern web projects, focused on providing an excellent developer experience. By using the eslintPlugin() with Vitest, developers can automatically run ESLint checks alongside their tests, ensuring that the code adheres to the defined coding standards and best practices.

The plugin helps maintain a clean and consistent codebase by identifying and reporting problematic patterns in the code during the testing process. This integration streamlines the development workflow, enabling developers to catch and fix potential issues early on, improving overall code quality and maintainability.
