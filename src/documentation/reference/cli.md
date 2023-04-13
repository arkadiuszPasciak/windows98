# Command Line Interface

## [npm](https://www.npmjs.com/)

### install

Command is used to automatically download and install the required dependencies for your project as specified in the `package.json` file. This command ensures that your project has the necessary libraries and packages to function correctly, streamlining the development process and enabling easy collaboration with other developers.

```bash
npm install
```

### prepare

Command runs the prepare script defined in the `package.json` file, which typically includes installing `Husky` and configuring the pre-defined Git hooks. This ensures that specific actions, such as code linting or running tests, are performed automatically before committing or pushing code, helping to maintain code quality and consistency across your project.

```bash
npm run prepare
```

## [npm-check-updates](https://github.com/raineorshine/npm-check-updates#npm-check-updates)

### packages:check-updates

Command is used to run the npm-check-update tool, which `scans` your project's package.json file for `outdated dependencies` and displays a list of `available updates`. This command runs the packages-check-updates script defined in your `package.json` file, which typically invokes the npm-check-update utility to identify and report packages that have newer versions available. By executing this command, you can stay informed about package updates, ensuring that your project remains up-to-date with the latest improvements and security fixes from the dependency ecosystem.

```bash
npm run packages:check-updates
```

### packages:update

Command is used to run the npm-check-update tool, which automatically `updates all available packages` in your project to their latest versions. This command runs the packages:update script defined in your `package.json` file, which typically invokes the npm-check-update utility with the -u flag, updating your `package.json` file with the newest versions of your dependencies. After executing this command, you will need to run npm install to install the updated packages. By using this command, you can ensure that your project stays up-to-date with the latest improvements and security fixes from the dependency ecosystem.

```bash
npm run packages:update
```

## [Vite](https://vitejs.dev/)

### dev

Command is used to start `a local development server` using Vite for your project. This command runs the `dev` script defined in your `package.json` file, which typically executes the Vite server with hot module replacement (HMR) enabled. As you make changes to your code, the development server will automatically reload the affected modules, providing a seamless and efficient development experience without requiring a full page refresh.

```bash
npm run dev
```

### build

Command is used to generate a production-ready version of your project using Vite. This command runs the `build` script defined in your `package.json` file, which typically triggers Vite's bundling and optimization process. The output is a set of optimized, minified files in a `/dist` directory, ready to be deployed to a hosting environment for optimal performance and reduced load times.

```bash
npm run build
```

### preview

Command is used to launch a local server to `preview` your production-built project using Vite. This command runs the preview script defined in your `package.json` file, which typically starts a Vite server with the contents of the dist directory after running npm run build. The preview command allows you to test and verify `the production version` of your project in a local environment, ensuring optimal performance and functionality before deployment.

```bash
npm run preview
```

## [vue-tsc](https://www.npmjs.com/package/vue-tsc)

### typecheck

Command is used to perform `TypeScript` type checking in your Vue project using the `vue-tsc` compiler. This command runs the typecheck script defined in your `package.json` file, which typically invokes vue-tsc to analyze your code and report any type errors or inconsistencies. By running this command, you can ensure that your Vue components and TypeScript code adhere to the defined types, helping to maintain code quality and prevent runtime errors.

```bash
npm run typecheck
```

## [ESLint](https://eslint.org)

### lint:js

Command is used to run ESLint on your Vue and TypeScript files in order to `check` for code style and syntax issues. This command runs the lint:js script defined in your `package.json` file, which typically configures ESLint to analyze your project's .vue and .ts files. By executing this command, you can identify and fix potential code inconsistencies, maintain code quality, and adhere to best practices across your project.

```bash
npm run lint:js
```

### lintfix:js

Command is used to run ESLint on your Vue and TypeScript files, `checking` for code style and syntax issues while automatically `fixing` any fixable problems. This command runs the lintfix:js script defined in your `package.json` file, which typically configures ESLint to analyze and correct your project's .vue and .ts files. By executing this command, you can streamline the process of maintaining code quality, ensuring consistency, and adhering to best practices across your project.

```bash
npm run lintfix:js
```

## [Stylelint](https://stylelint.io)

### lint:styles

Command is used to run Stylelint on your Vue and SCSS files in order to `check` for CSS-related code style and syntax issues. This command runs the lint:stylelint script defined in your `package.json` file, which typically configures Stylelint to analyze your project's .vue and .scss files. By executing this command, you can identify and fix potential styling inconsistencies, maintain code quality, and ensure that your project adheres to CSS best practices.

```bash
npm run lint:styles
```

### lintfix:styles

Command is used to run Stylelint on your Vue and SCSS files, `checking` for CSS-related code style and syntax issues while automatically `fixing` any fixable problems. This command runs the lintfix:stylelint script defined in your `package.json` file, which typically configures Stylelint to analyze and correct your project's .vue and .scss files. By executing this command, you can streamline the process of maintaining styling consistency, ensuring code quality, and adhering to CSS best practices across your project.

```bash
npm run lintfix:styles
```

## [Prettier](https://prettier.io)

### lint:prettier

Command is used to run Prettier on all your project files in order to `check` for code formatting inconsistencies. This command runs the lint:prettier script defined in your `package.json` file, which typically configures Prettier to analyze your entire project for files that do not adhere to the predefined formatting rules. By executing this command, you can identify and fix potential formatting issues, maintain code quality, and ensure a consistent and readable codebase across your project.

```bash
npm run lint:prettier
```

### lintfix:prettier

Command is used to run Prettier on all your project files, `checking` for code formatting inconsistencies while automatically `fixing` any fixable issues. This command runs the lintfix:prettier script defined in your `package.json` file, which typically configures Prettier to analyze and correct your entire project to adhere to the predefined formatting rules. By executing this command, you can streamline the process of maintaining a consistent and readable codebase, ensuring code quality and best practices across your project.

```bash
npm run lintfix:prettier
```

## [Vitest](https://vitest.dev/)

### test

Command is used to run your project's `unit tests` using Vitest, a testing framework optimized for Vite projects. This command runs the test script defined in your `package.json` file, which typically configures Vitest to execute your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can validate the functionality of individual units of your code, ensuring they work correctly and helping to maintain overall code quality and reliability in your project.

```bash
npm run test
```

### test:run

Command is used to execute your project's unit tests once using Vitest, a testing framework optimized for Vite projects. This command runs the test:run script defined in your package.json file, which typically configures Vitest to perform a single run of your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can quickly validate the functionality of individual units of your code, ensuring they work correctly and helping to maintain overall code quality and reliability in your project without continuous test execution.

```bash
npm run test:run
```

## [Cypress](https://www.cypress.io/)

### cypress:open

Command is used to `launch` the Cypress interactive test runner for `developing` and `debugging` your Component Testing or End-to-End (E2E) tests. This command runs the cypress:open script defined in your `package.json` file, which typically starts the Cypress application, providing a user-friendly interface for running and observing your tests in real-time. By executing this command, you can efficiently develop, modify, and troubleshoot your Component Testing or E2E tests, ensuring a high-quality and reliable user experience for your project.

```bash
npm run cypress:open
```

### cypress:run

Command is used to `execute` your project's Component Testing or End-to-End (E2E) tests once using Cypress, a popular testing framework. This command runs the cypress:run script defined in your `package.json` file, which typically configures Cypress to perform `a single run` of your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can quickly validate the functionality and user experience of your project's components and features, ensuring overall quality and reliability without continuous test execution.

<!-- TODO
1. add docs commands
 -->
