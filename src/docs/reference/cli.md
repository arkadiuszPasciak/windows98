# CLI

## [pnpm](https://pnpm.io/)

### install

Command is used to automatically download and install the required dependencies for your project as specified in the `package.json` file. This command ensures that your project has the necessary libraries and packages to function correctly, streamlining the development process and enabling easy collaboration with other developers.

### prepare

Command runs the prepare script defined in the `package.json` file, which typically includes installing `Husky` and configuring the pre-defined Git hooks. This ensures that specific actions, such as code linting or running tests, are performed automatically before committing or pushing code, helping to maintain code quality and consistency across your project.

```bash
pnpm run prepare
```

## [Vite](https://vitejs.dev/)

### app:build

Command is used to generate a production-ready version of your project using Vite. This command runs the `build` script defined in your `package.json` file, which typically triggers Vite's bundling and optimization process. The output is a set of optimized, minified files in a `/dist` directory, ready to be deployed to a hosting environment for optimal performance and reduced load times.

```bash
pnpm run app:build
```

### app:dev

Command is used to start `a local development server` using Vite for your project. This command runs the `dev` script defined in your `package.json` file, which typically executes the Vite server with hot module replacement (HMR) enabled. As you make changes to your code, the development server will automatically reload the affected modules, providing a seamless and efficient development experience without requiring a full page refresh.

```bash
pnpm run app:dev
```

### app:preview

Command is used to launch a local server to `preview` your production-built project using Vite. This command runs the preview script defined in your `package.json` file, which typically starts a Vite server with the contents of the dist directory after running `pnpm run app:build`. The preview command allows you to test and verify `the production version` of your project in a local environment, ensuring optimal performance and functionality before deployment.

```bash
pnpm run app:preview
```

## [Vitest](https://vitest.dev/)

### vitest:dev

Command is used to run your project's `unit tests` using Vitest, a testing framework optimized for Vite projects. This command runs the test script defined in your `package.json` file, which typically configures Vitest to execute your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can validate the functionality of individual units of your code, ensuring they work correctly and helping to maintain overall code quality and reliability in your project.

```bash
pnpm run vitest:dev
```

### vitest:run

Command is used to execute your project's unit tests once using Vitest, a testing framework optimized for Vite projects. This command runs the test:run script defined in your package.json file, which typically configures Vitest to perform a single run of your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can quickly validate the functionality of individual units of your code, ensuring they work correctly and helping to maintain overall code quality and reliability in your project without continuous test execution.

```bash
pnpm run vitest:run
```

## [VuePress](https://v2.vuepress.vuejs.org/)

### docs:run

Command is a handy script associated with VuePress that launches a local development server for your documentation. This command enables you to preview and edit your documentation in a live environment with hot-reloading features, allowing you to see changes in real-time as you modify your content. It is a valuable tool for developers working with VuePress, simplifying the process of crafting and updating documentation pages.

```bash
pnpm run docs:run
```

### docs:build

Command is a useful script in VuePress projects that generates a production-ready version of your documentation. By executing this command, VuePress compiles and optimizes your documentation files into static assets, ensuring they are ready for deployment to a live server. This command is essential for developers working with VuePress, as it ensures an efficient, high-performance documentation website for end-users.

```bash
pnpm run docs:build
```
