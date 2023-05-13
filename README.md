# Windows98

Welcome to **Windows98**, a creative endeavor where I am re-building the look and feel of Windows98 right in your browser. This project is more than just a nostalgic trip down memory lane, it serves as my personal sandbox for refining and improving my programming skills.

## Technologies

This project utilizes an array of modern web technologies and tools:

- The project is bundled with [Vite](https://vitejs.dev/), a next-generation frontend tooling.
- It's built on the [Vue 3](https://v3.vuejs.org/) framework, using [TypeScript](https://www.typescriptlang.org/) for static type checking.
- Styling is crafted with [SCSS](https://sass-lang.com/), a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
- State management is handled using [Pinia](https://pinia.esm.dev/), an intuitive and type safe store for Vue.
- Comprehensive testing is performed with [Cypress](https://www.cypress.io/) and [Vitest](https://vitest.dev/).
- Internationalization is achieved through [vue-i18n](https://kazupon.github.io/vue-i18n/).
- Types are checked using [vue-tsc](https://github.com/johnsoncodehk/volar#using).
- Linting tools include [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Stylelint](https://stylelint.io/), and [lint-staged](https://github.com/okonet/lint-staged).
- Git hooks are modified with [Husky](https://typicode.github.io/husky/#/).
- Continuous Integration and Continuous Deployment (CI/CD) is managed with [GitHub Actions](https://github.com/features/actions).
- Documentation is created with [Vitepress](https://vitepress.vuejs.org/).
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) is used to keep packages updated.

Feel free to explore the project, provide feedback, and contribute if you're interested. Enjoy the trip back to Windows98, right in your browser!

## Documentation

- [Windows98 Documentation]()
  - Guide
    - [Manual Installation]()
    - [Building for Production]()
    - [Run a Development Server]()
    - [Preview a Production Server]()
  - References
    - [CLI]()
    - [Config]()
    - [Features]()
    - [Git hooks]()
    - [IDE/VSCode]()
    - [Internationalization]()
    - [License]()
    - [Linters]()
    - [SRC Structure]()
    - [Testing]()

## Quick Start

1. Ensure you have Node.js v18.16.0 installed. If not, download and install it from https://nodejs.org/en/download/. If you have a different version of Node.js installed, you can use Node Version Manager (NVM) to switch between versions. To install NVM, follow the instructions at https://github.com/nvm-sh/nvm#installing-and-updating. Once installed, use nvm install 18.16.0 to install Node.js v18.16.0 and nvm use 18.16.0 to switch to it.

2. Clone the repository by running.

```bash
git clone https://github.com/arkadiuszPasciak/windows98.git
```

3. Navigate to the cloned directory.

```bash
cd windows98
```

4. Install the required dependencies.

```bash
npm install
```

5. Start the development mode.

```bash
npm run app:dev
```

Now you can access the application in your browser at http://localhost:5173. Enjoy!

## License

This project is licensed under the MIT [license](src/docs/reference/license.md).
