# IDE / VSCode

In our project, we use [Visual Studio Code (VSCode)](https://code.visualstudio.com/) as our [Integrated Development Environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment). VSCode is a lightweight, powerful, and versatile IDE developed by [Microsoft](https://www.microsoft.com/pl-pl/). It supports a wide range of programming languages, frameworks, and tools through its extensive library of extensions. With features such as IntelliSense for code completion, syntax highlighting, and built-in Git integration, VSCode helps streamline the development process and improve productivity. Customizable themes and settings enable a personalized development experience tailored to individual preferences. By using VSCode as our IDE, we benefit from an efficient and robust development environment that can adapt to the unique needs of our project.

## [Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace)

`@/.vscode/extensions.json`

We use various Visual Studio Code (VSCode) extensions to enhance the development experience and improve productivity. Extensions are add-ons that provide additional features, language support, debugging tools, and more. They can be easily installed and managed within the IDE to cater to the specific requirements of our project.

We maintain a dedicated configuration file in our project, typically named `extensions.json`, to define and share the recommended extensions among team members. This file allows developers to easily set up their environment with the required extensions, ensuring a consistent and efficient development experience across the team. By using extensions.json, we can maintain a standardized set of tools that address the unique needs of our project, simplifying the onboarding process for

In this specific file, the "recommendations" array includes three recommended extensions for VSCode:

1. [Vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
2. [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
3. [rvest.vs-code-prettier-eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

## [Settings](https://code.visualstudio.com/docs/getstarted/settings)

`@/.vscode/settings.json`

We utilize settings to customize the development environment and maintain a consistent configuration across the team. VSCode settings are stored in a JSON format and can be easily adjusted to match the project's requirements, such as modifying editor behavior, appearance, and extensions' configurations.

We maintain a dedicated settings.json file in our project, usually located in the .vscode folder. This file contains project-specific settings that override the global settings for each team member who works on the project. By sharing this file within the repository, we ensure that all developers follow the same configurations, leading to a uniform development experience and minimizing potential conflicts. The `settings.json` file streamlines the onboarding process for new team members and maintains a consistent environment across the project's life cycle.
