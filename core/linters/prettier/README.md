# [Prettier](https://prettier.io)

## Commands

### lint:prettier

Command is used to run Prettier on all your project files in order to `check` for code formatting inconsistencies.

```bash
pnpm --filter @windows98/prettier run lint:prettier
```

### lintfix:prettier

Command is used to run Prettier on all your project files, `checking` for code formatting inconsistencies while automatically `fixing` any fixable issues. This command runs the lintfix:prettier script defined in your `package.json` file, which typically configures Prettier to analyze and correct your entire project to adhere to the predefined formatting rules. By executing this command, you can streamline the process of maintaining a consistent and readable codebase, ensuring code quality and best practices across your project.

```bash
pnpm --filter @windows98/prettier run lintfix:prettier
```
