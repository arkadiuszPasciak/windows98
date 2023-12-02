# [@windows98/cypress](https://www.cypress.io/)

## Description

Cypress is a JavaScript-based end-to-end testing framework that enables us to create and manage tests for our web application components. By using Cypress, we can simulate user interactions and ensure that the application behaves as expected. Some key features of Cypress include real-time reloading, time-travel debugging, and automatic waiting.

We use Cypress primarily for `component testing`, which involves checking the individual parts of our application in isolation. This helps us confirm that each component functions correctly, displays the intended UI elements, and interacts with other components as expected.

To accomplish this, we create a series of test suites, each containing a collection of test cases that cover various aspects of the component's behavior, including rendering, event handling, and data manipulation.

## Commands

### test:integration:open

Command is used to `launch` the Cypress interactive test runner for `developing` and `debugging` your Component Testing or End-to-End (E2E) tests. This command runs the script defined in your `package.json` file, which typically starts the Cypress application, providing a user-friendly interface for running and observing your tests in real-time. By executing this command, you can efficiently develop, modify, and troubleshoot your Component Testing or E2E tests, ensuring a high-quality and reliable user experience for your project.

```bash
pnpm --filter @windows98/cypress run test:integration:run
```

### test:integration:run

Command is used to `execute` your project's Component Testing or End-to-End (E2E) tests once using Cypress, a popular testing framework. This command runs the cypress:run script defined in your `package.json` file, which typically configures Cypress to perform `a single run` of your test files, located in a dedicated test directory or following a specific naming convention. By running this command, you can quickly validate the functionality and user experience of your project's components and features, ensuring overall quality and reliability without continuous test execution.

```bash
pnpm --filter @windows98/cypress run test:integration:open
```
