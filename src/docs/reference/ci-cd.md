# CI/CD

This Continuous Integration (CI) / Continuous Delivery (CD) workflow is designed to automate various tasks and ensure code quality in your GitHub repository. The workflow is triggered on pull requests targeting the master branch and can also be manually triggered using the workflow_dispatch event.

## [Feature Branch](https://resources.github.com/ci-cd/)

`@/.github/workflows/ci-cd.yml`

This CI/CD workflow ensures that your codebase remains consistent, well-structured, and thoroughly tested, streamlining the development process and enhancing collaboration within your team.

### Environment Variables

1. `VERCEL_ORG_ID`: Connects the Vercel organization to GitHub.
2. `VERCEL_PROJECT_ID`: Identifies the specific Vercel project.

### Jobs

1. `install-cache`: Installs Node.js and caches Cypress dependencies.
2. `type-check`: Performs type checking for TypeScript and Vue files.
3. `eslint-lint`: Lints TypeScript and Vue files using ESLint.
4. `stylelint-lint`: Lints SCSS and Vue files using Stylelint.
5. `vitest-tests`: Runs all unit tests using Vitest.
6. `build`: Builds the application for production.
7. `cypress-component-tests`: Executes component testing with Cypress.
8. `deploy-preview`: Deploys the feature branch using Vercel for preview.

## [Deploy Production](https://vercel.com/docs/concepts/deployments/git)

`@/.github/workflows/deploy-production.yml`

This deploy production workflow file that automates the deployment process of a project to the production environment using Vercel. This workflow is triggered by a push event to the master branch and includes steps to install the Vercel CLI, pull environment information, build project artifacts, and deploy them to Vercel. The necessary secrets, such as Vercel tokens and organization/project IDs, are securely stored using Github secrets
