# Windows98

Welcome to **Windows98**, a creative endeavor where I am re-building the look and feel of Windows98 right in your browser. This project serves as my **personal portfolio and development sandbox** for refining and improving not only my programming skills, but also architecture design, documentation practices, testing strategies, and modern development workflows.


## Quick Start

1. Ensure you have Node.js v22.17.1 installed. If not, download and install it from https://nodejs.org/en/download/. If you have a different version of Node.js installed, you can use Node Version Manager (NVM) to switch between versions. To install NVM, follow the instructions at https://github.com/nvm-sh/nvm#installing-and-updating. Once installed, use nvm install 22.17.1 to install Node.js v22.17.1 and nvm use 22.17.1 to switch to it.

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

## About This Project

This isn't just a nostalgic recreation—it's a comprehensive showcase of modern web development practices applied to a familiar interface. Through this project, I explore and demonstrate:

- **Modern Architecture Patterns**: Micro-frontends, micro-services, and clean architecture
- **Advanced TypeScript**: Strong typing, generics, and design patterns
- **Component Design**: Reusable design systems and component libraries
- **Documentation Excellence**: Comprehensive guides and API documentation
- **Testing Strategies**: Unit, integration, and end-to-end testing approaches
- **Development Workflows**: Monorepo management, CI/CD, and tooling optimization

## Workspaces

1. **`@windows98/app`** - Main application entry point that orchestrates all micro-frontends and services
2. **`@windows98/design-system`** - Comprehensive React component library with Windows98 theming
3. **`@windows98/micro-frontends`** - Independent React applications built as web components (Calculator, Notepad, File Manager, etc.)
4. **`@windows98/micro-services`** - TypeScript services with clean data/domain architecture (Storage, Theme, Language, etc.)
5. **`@windows98/toolkit`** - Shared utilities, types, and common functionality
6. **`@windows98/i18n`** - Internationalization system with multi-language support

## Documentation

Comprehensive documentation is available in Storybook format, covering architecture, guides, and API references.**

### Running the Documentation

Run the Storybook documentation locally or dive into the source code to see these patterns in action.

```bash
cd docs
pnpm dev
```

## License

This project is licensed under the MIT.

