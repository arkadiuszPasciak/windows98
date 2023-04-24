# Git Hooks

Git hooks are custom scripts that execute automatically when specific Git events occur, such as committing or pushing code. They help maintain code quality, enforce coding standards, and automate repetitive tasks. In the project, we use Husky, a popular npm package that simplifies the management and configuration of Git hooks. With [Husky](https://typicode.github.io/husky), we can easily set up pre-commit and pre-push hooks, ensuring that our code passes linting, testing, and other checks before being committed or pushed to the repository. This helps to maintain a clean and consistent codebase, reducing the likelihood of introducing errors and enhancing overall project quality.

## [Pre Commit](https://typicode.github.io/husky/#/?id=create-a-hook)

`@/.husky/pre-commit`

Pre-commit Git hooks in Husky are custom scripts that automatically execute before a commit is created. They help maintain code quality and consistency by running checks and validations on the staged files. With Husky, setting up pre-commit hooks is simple and efficient. Common use cases for pre-commit hooks include running code linting, formatting, and unit tests. If any of these checks fail, the commit is aborted, ensuring that only clean and compliant code is committed to the repository. By leveraging pre-commit hooks with Husky, we can streamline our development workflow and minimize the risk of introducing errors or inconsistencies in the codebase.

In this specific example, the pre-commit script runs:

1. `npm run typecheck` command to perform type checking
2. `npm run test:run` to run unit tests
3. `npx lint-staged --no-stash` to run linting on staged files.

If any of these tests fail, the commit will be prevented and an error message will be displayed.

## [Configuration Husky](https://typicode.github.io/husky/#/?id=install)

`@/.husky/_/husky.sh`

The file in Husky Git hooks is a script that is used to set up the environment for the Git hooks. This file is typically included in the Git hooks directory and is sourced by the Git hook scripts to set up the necessary environment variables and functions. The `husky.sh` file is responsible for configuring Husky and ensuring that the necessary binaries and dependencies are installed before the Git hooks are executed. In essence, it serves as a bridge between the Husky library and the Git hooks scripts to ensure that everything is properly set up and configured.
