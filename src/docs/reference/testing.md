# Testing

This documentation provides an overview of the testing process employed in our application. We utilize two powerful testing tools to ensure the reliability and stability of the code: Cypress and Vitest. These tools are employed in different aspects of testing to maximize coverage and maintain code quality.

## [Vitest](https://vitest.dev/)

`@/vite.config.ts` (in the block test)

Vitest is a lightweight and fast testing framework specifically designed for Vite applications. It provides seamless integration with Vite, supporting both JavaScript and TypeScript code. Vitest is particularly well-suited for unit testing, which focuses on verifying the functionality of individual code units, such as functions, classes, or modules.

We use Vitest for `unit testing` our TypeScript code, ensuring that each function or class in our application performs as intended. This approach allows us to isolate potential issues and fix them before they cause problems in the broader application context.

To effectively use Vitest, we create a series of test suites that group related tests, with each test case focusing on a specific unit of code. These test cases cover various scenarios, such as input validation, error handling, and edge cases, to ensure comprehensive coverage of our codebase.
