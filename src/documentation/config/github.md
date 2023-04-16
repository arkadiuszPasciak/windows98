# Github

## Description

Special directory used to store GitHub-specific configuration files and workflows. It helps organize and manage various GitHub features, such as issue and pull request templates, contributing guidelines, and GitHub Actions workflows. By centralizing these configurations in the `.github` folder, developers can maintain a clean and organized repository structure while leveraging GitHub's platform-specific features to enhance collaboration, automate tasks, and streamline the development process.

`@/.github/*`

## Files

### [Pull Request Template](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository)

`@/.github/pull_request_template.md`

GitHub-specific configuration file that provides a predefined structure and guidelines for creating new pull requests. By defining a template, maintainers can ensure that contributors follow a consistent format when submitting changes, making it easier to review and manage contributions. The template can include prompts for providing a description of the changes, relevant issue numbers, testing steps, and any additional information that might be required. When a contributor creates a new pull request, the content of the pull_request_template.md file will be automatically pre-filled in the description field, encouraging adherence to the established conventions and fostering a more efficient and organized collaboration process.

### [CI/CD](https://resources.github.com/ci-cd/)

`@/.github/workflows/ci-cd.yml`

This CI/CD workflow is designed to automate various tasks and ensure code quality in your GitHub repository. The workflow is triggered on pull requests targeting the master branch and can also be manually triggered using the workflow_dispatch event.

#### Environment Variables:

1. `VERCEL_ORG_ID`: Connects the Vercel organization to GitHub.
2. `VERCEL_PROJECT_ID`: Identifies the specific Vercel project.

#### Jobs:

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

### [Deploy Production](https://vercel.com/docs/concepts/deployments/git)

`@/.github/workflows/deploy-production.yml`

This deploy production workflow file that automates the deployment process of a project to the production environment using Vercel. This workflow is triggered by a push event to the master branch and includes steps to install the Vercel CLI, pull environment information, build project artifacts, and deploy them to Vercel. The necessary secrets, such as Vercel tokens and organization/project IDs, are securely stored using Github secrets

#### Environment Variables:

1. `VERCEL_ORG_ID`: Connects the Vercel organization to GitHub.
2. `VERCEL_PROJECT_ID`: Identifies the specific Vercel project.

#### Jobs:

1. `deploy-production`: Deploys the production branch using Vercel
