# Windows98

Welcome to **Windows98**, a creative endeavor where I am re-building the look and feel of Windows98 right in your browser. This project is more than just a nostalgic trip down memory lane, it serves as my personal sandbox for refining and improving my programming skills.

## Technologies

This project utilizes an array of modern web technologies and tools:

1. `@windows98/app` - This is the main application. Previously, it was developed using Vue 3 with Pinia. Now, its components have been divided among other workspaces.
2. `@windows98/design-system` - This is a library of React components used in micro-apps.
3. `@windows98/micro-apps` - These are React applications with MobX. They are built as web components and used within the main app.
4. `@windows98/micro-services` - These are TypeScript classes with logic that is exported to the main app.
5. `@windows98/toolkit` - This includes utilities, types, and other common elements.
6. `@windows98/i18n` - This contains all locales and tools for the application.

Feel free to explore the project, provide feedback. Enjoy the trip back to Windows98, right in your browser!

## Documentation WIP

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

1. Ensure you have Node.js v20.12.0 installed. If not, download and install it from https://nodejs.org/en/download/. If you have a different version of Node.js installed, you can use Node Version Manager (NVM) to switch between versions. To install NVM, follow the instructions at https://github.com/nvm-sh/nvm#installing-and-updating. Once installed, use nvm install 20.12.0 to install Node.js v20.12.0 and nvm use 20.12.0 to switch to it.

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
pnpm install
```

3. Navigate to the app directory.

```bash
cd app
```

5. Start the development mode.

```bash
pnpm run dev
```

Now you can access the application in your browser at http://localhost:5173. Enjoy!

## License

This project is licensed under the MIT [license](src/docs/reference/license.md).
