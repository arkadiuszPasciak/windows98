# [@windows98/vitest](https://vitest.dev/)

## Description

Vitest is a modern and fast testing framework specifically designed for Vite-powered projects. Developed by the [Vite team](https://vitejs.dev/team.html), Vitest leverages Vite's architecture to provide a seamless testing experience with features like native ESM support, rapid test execution, and isolated testing environments. It offers compatibility with various front-end libraries and frameworks, such as Vue, React, and Svelte. With its straightforward configuration and integration with Vite, Vitest aims to enhance the developer experience by providing an efficient and enjoyable testing workflow for Vite-based web applications.

## Commands

### test:unit:watch

Command is used to run your project's `unit tests` using Vitest, a testing framework optimized for Vite projects. This command runs the test script defined in your `package.json` file, which typically configures Vitest to execute your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can validate the functionality of individual units of your code, ensuring they work correctly and helping to maintain overall code quality and reliability in your project.

```bash
pnpm run --filter @windows98/vitest test:unit:watch
```

### test:unit:run

Command is used to execute your project's unit tests once using Vitest, a testing framework optimized for Vite projects. This command runs the test:run script defined in your package.json file, which typically configures Vitest to perform a single run of your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can quickly validate the functionality of individual units of your code, ensuring they work correctly and helping to maintain overall code quality and reliability in your project without continuous test execution.

```bash
pnpm run --filter @windows98/vitest test:unit:run
```
