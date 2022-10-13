# Windows98

My sandbox to improve my programming skills based on Windows 98

## Table of Contents

- [Windows98](#windows98)
  - [Features](#features)
  - [Quick Start](#quick-start)
    - [Install application](#install-application)
    - [Update packages](#update-packages)
  - [Deploy](#deploy)
    - [Node.js server](#nodejs-server)
  - [Commands](#commands)
  - [Bundle Structure](#bundle-structure)

## Features

- 🖼 [Get ready for a development environment that can finally catch up with you](https://vitejs.dev/)
- 📑 [Builds your next application with Vue 3](https://vuejs.org/)
- 🤖 [Strongly typed, object oriented, compiled language (TypeScript)](https://www.typescriptlang.org/)
- 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- 🚩 [Localization (i18n) by @intlify](https://github.com/intlify/bundle-tools/blob/main/packages/vite-plugin-vue-i18n/README.md)
- 🐶 [Improves your commits and more (Husky)](https://typicode.github.io/husky/)
- ⚡ [Blazing Fast Unit Test Framework (Vitest)](https://vitest.dev/)
- 🐛 [Helps you find and fix problems with your JavaScript (Eslint)](https://eslint.org/)
- 🖌 [Helps you find and fix problems with your SCSS (Stylelint)](https://stylelint.io/)
- 🖨 [Takes your code and reprints to coding standards (Prettier)](https://prettier.io/)
- 📦 [Ppgrades your package.json dependencies to the latest versions (npm-check-updates)](https://github.com/raineorshine/npm-check-updates)

## Quick Start

### Install application

- This project using `npm` as package manager.
- Clone this project to your computer `git clone https://github.com/arkadiuszPasciak/windows98`
- Install dependencies `npm install`
- Run `npm run dev` to start development server and open `http://127.0.0.1:5173/` in your browser

### Update packages

[npm-check-updates](https://github.com/raineorshine/npm-check-updates) is fully compatible with yarn

- Run `npm run packages-check-updates` to show all packages to upgrade in `package.json`
- Run `npm run packages-update` to upgrade all packages in `package.json`
- Run `npm run install` to install new versions

## Deploy

### Node.js server

- Run `npm run build` to build the project
- Serve `dist/index.html` file
  Checkout the [deployment documentation](https://vitejs.dev/guide/build.html).

## Commands

- [`npm install`](https://docs.npmjs.com/cli/v6/commands/npm-install) to install the project
- [`npm run prepare`](https://typicode.github.io/husky/#/?id=install) to install the husky. It's automatically after `npm install`
- [`npm update:packages`](https://www.npmjs.com/package/npm-check-updates) to update npm packages
- [`npm run dev`](https://vitejs.dev/guide/#command-line-interface) to start dev server
- [`npm run build`](https://vitejs.dev/guide/#command-line-interface) to build for productin
- [`npm run preview`](https://vitejs.dev/guide/#command-line-interface) to start preview production build
- [`npm run lint:js`](https://eslint.org/docs/latest/user-guide/command-line-interface) to show files `js, ts, vue` to lint
- [`npm run lint:styles`](https://stylelint.io/user-guide/usage/cli/) to show files `scss, vue` to lint
- [`npm run lint:prettier`](https://stylelint.io/user-guide/usage/cli/) to show files `*` to format
- [`npm run lintfix:js`](https://eslint.org/docs/latest/user-guide/command-line-interface) to fix files `js, ts, vue`
- [`npm run lintfix:styles`](https://stylelint.io/user-guide/usage/cli/) to fix files `scss, vue`
- [`npm run lintfix:prettier`](https://stylelint.io/user-guide/usage/cli/) to format files `*`
- [`npm run typecheck`](https://www.npmjs.com/package/vue-tsc) to test types
- [`npm run test`](https://vitest.dev/guide/cli.html#vitest) to test in the current directory
- [`npm run test:ui`](https://vitest.dev/guide/ui.html) to test with use UI
- [`npm run test:run`](https://vitest.dev/guide/cli.html#vitest-run) to test on single run without watch mode
- [`npm run packages-check-updates`](https://github.com/raineorshine/npm-check-updates#installation) to show all packages to upgrade in `package.json`
- [`npm run packages-update`](https://github.com/raineorshine/npm-check-updates#installation) to upgrade all packages in `package.json`

## Bundle structure

```
Components
Locales
Mocks
Services
Stores
Styles
Supports
Tests
└── units
```
