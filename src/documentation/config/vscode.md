# VSCode

## Description

The `.vscode` folder in an application is typically used to store configuration files for the Visual Studio Code (VS Code) editor. These configuration files can include settings, launch configurations, and task configurations, among others. The `.vscode` folder is usually located in the root directory of the application and is automatically created by VS Code when the user opens the project in the editor for the first time. These files can be shared with other team members, allowing everyone to use the same settings and configurations when working on the project. The `.vscode` folder can help to streamline the development process and improve collaboration within the development team.

`@/.vscode/*`

## Files

### [Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace)

`@/.vscode/extensions.json`

This file is used to specify a list of recommended extensions for the project. When someone opens the project in VS Code, they will be prompted to install the recommended extensions if they are not already installed. The "extensions.json" file can be useful in ensuring that everyone on the team is using the same extensions, which can help to standardize development workflows and reduce potential compatibility issues. The file includes a list of recommended extensions, as well as information about the recommended versions and sources for each extension.

In this specific file, the "recommendations" array includes three recommended extensions for VSCode:

1. `Vue.volar`
2. `stylelint.vscode-stylelint`
3. `rvest.vs-code-prettier-eslint`

### [Settings](https://code.visualstudio.com/docs/getstarted/settings)

`@/.vscode/settings.json`

This file is used to specify user settings for the VS Code editor. These settings can include anything from the font size and color theme to the default terminal and Git path. The `settings.json` file can be used to customize the VS Code editor to the developer's preferences and to streamline development workflows. The file includes a list of settings and their values, which can be edited manually or set using the VS Code Settings UI. The "settings.json" file is automatically created by VS Code when the user makes changes to the default settings.
