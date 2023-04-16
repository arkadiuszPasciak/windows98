# Config

## Github

### Description

Special directory used to store GitHub-specific configuration files and workflows. It helps organize and manage various GitHub features, such as issue and pull request templates, contributing guidelines, and GitHub Actions workflows. By centralizing these configurations in the `.github` folder, developers can maintain a clean and organized repository structure while leveraging GitHub's platform-specific features to enhance collaboration, automate tasks, and streamline the development process.

`@/.github/*`

### Files

#### [Pull Request Template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)

`@/.github/pull_request_template.md`

GitHub-specific configuration file that provides a predefined structure and guidelines for creating new pull requests. By defining a template, maintainers can ensure that contributors follow a consistent format when submitting changes, making it easier to review and manage contributions. The template can include prompts for providing a description of the changes, relevant issue numbers, testing steps, and any additional information that might be required. When a contributor creates a new pull request, the content of the pull_request_template.md file will be automatically pre-filled in the description field, encouraging adherence to the established conventions and fostering a more efficient and organized collaboration process.

#### [CI/CD](https://resources.github.com/ci-cd/)

`@/.github/workflows/ci-cd.yml`

This CI/CD workflow is designed to automate various tasks and ensure code quality in your GitHub repository. The workflow is triggered on pull requests targeting the master branch and can also be manually triggered using the workflow_dispatch event.

##### Environment Variables:

1. `VERCEL_ORG_ID`: Connects the Vercel organization to GitHub.
2. `VERCEL_PROJECT_ID`: Identifies the specific Vercel project.

##### Jobs:

1. `install-cache`: Installs Node.js and caches Cypress dependencies.
2. `type-check`: Performs type checking for TypeScript and Vue files.
3. `eslint-lint`: Lints TypeScript and Vue files using ESLint.
4. `prettier-lint`: Lints all files using Prettier.
5. `stylelint-lint`: Lints SCSS and Vue files using Stylelint.
6. `vitest-tests`: Runs all unit tests using Vitest.
7. `build`: Builds the application for production.
8. `cypress-component-tests`: Executes component testing with Cypress.
9. `deploy-preview`: Deploys the feature branch using Vercel for preview.

This CI/CD workflow ensures that your codebase remains consistent, well-structured, and thoroughly tested, streamlining the development process and enhancing collaboration within your team.

#### [Deploy Production](https://vercel.com/docs/concepts/deployments/git)

`@/.github/workflows/deploy-production.yml`

This deploy production workflow file that automates the deployment process of a project to the production environment using Vercel. This workflow is triggered by a push event to the master branch and includes steps to install the Vercel CLI, pull environment information, build project artifacts, and deploy them to Vercel. The necessary secrets, such as Vercel tokens and organization/project IDs, are securely stored using Github secrets

##### Environment Variables:

1. `VERCEL_ORG_ID`: Connects the Vercel organization to GitHub.
2. `VERCEL_PROJECT_ID`: Identifies the specific Vercel project.

##### Jobs:

1. `deploy-production`: Deploys the production branch using Vercel

<br>

## Husky

### Description

The directory in the application typically contains configuration files for the Husky Git hooks library. Husky allows developers to automate tasks, such as linting or testing, before committing changes to the repository. The `.husky` directory usually includes scripts that are executed automatically when certain Git hooks are triggered, such as pre-commit or pre-push. These scripts can help to improve code quality and maintain consistency within the codebase.

`@/.husky/*`

### Files

#### [Pre Commit](https://typicode.github.io/husky/#/?id=create-a-hook)

`@/.husky/pre-commit`

The file in the Husky Git hooks is a script that is executed automatically before committing changes to a repository. This file typically contains commands to run various tests, such as type checking, unit tests, and linting, to ensure that the code being committed meets certain standards.

In this specific example, the pre-commit script runs:

1. `npm run typecheck` command to perform type checking
2. `npm run test:run` to run unit tests
3. `npx lint-staged --no-stash` to run linting on staged files.

If any of these tests fail, the commit will be prevented and an error message will be displayed.

#### [Configuration Husky](https://typicode.github.io/husky/#/?id=install)

`@/.husky/_/husky.sh`

The file in Husky Git hooks is a script that is used to set up the environment for the Git hooks. This file is typically included in the Git hooks directory and is sourced by the Git hook scripts to set up the necessary environment variables and functions. The `husky.sh` file is responsible for configuring Husky and ensuring that the necessary binaries and dependencies are installed before the Git hooks are executed. In essence, it serves as a bridge between the Husky library and the Git hooks scripts to ensure that everything is properly set up and configured.

<br>

## VSCode

### Description

The `.vscode` folder in an application is typically used to store configuration files for the Visual Studio Code (VS Code) editor. These configuration files can include settings, launch configurations, and task configurations, among others. The `.vscode` folder is usually located in the root directory of the application and is automatically created by VS Code when the user opens the project in the editor for the first time. These files can be shared with other team members, allowing everyone to use the same settings and configurations when working on the project. The `.vscode` folder can help to streamline the development process and improve collaboration within the development team.

`@/.vscode/*`

### Files

#### [Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace)

`@/.vscode/extensions.json`

This file is used to specify a list of recommended extensions for the project. When someone opens the project in VS Code, they will be prompted to install the recommended extensions if they are not already installed. The "extensions.json" file can be useful in ensuring that everyone on the team is using the same extensions, which can help to standardize development workflows and reduce potential compatibility issues. The file includes a list of recommended extensions, as well as information about the recommended versions and sources for each extension.

In this specific file, the "recommendations" array includes three recommended extensions for VSCode:

1. `Vue.volar`
2. `stylelint.vscode-stylelint`
3. `rvest.vs-code-prettier-eslint`

#### [Settings](https://code.visualstudio.com/docs/getstarted/settings)

`@/.vscode/settings.json`

This file is used to specify user settings for the VS Code editor. These settings can include anything from the font size and color theme to the default terminal and Git path. The `settings.json` file can be used to customize the VS Code editor to the developer's preferences and to streamline development workflows. The file includes a list of settings and their values, which can be edited manually or set using the VS Code Settings UI. The "settings.json" file is automatically created by VS Code when the user makes changes to the default settings.
