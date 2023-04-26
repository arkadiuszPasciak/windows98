import type { NavbarConfig } from '@vuepress/theme-default'

const navbarConfig: NavbarConfig = [
  {
    text: 'Guide',
    children: [
      {
        text: 'Manual Installation',
        link: '/guide/manual-installation.html',
      },
      {
        text: 'Building for Production',
        link: '/guide/building-for-production.html',
      },
      {
        text: 'Run a Development Server',
        link: '/guide/run-a-development-server.html',
      },
      {
        text: 'Preview a Production Server',
        link: '/guide/preview-a-production-server.html',
      },
    ],
  },
  {
    text: 'Features',
    children: [
      {
        text: 'Vite',
        link: '/features/vite.html',
      },
      {
        text: 'Vue 3',
        link: '/features/vue-3.html',
      },
      {
        text: 'TypeScript',
        link: '/features/typescript.html',
      },
      {
        text: 'SCSS',
        link: '/features/scss.html',
      },
      {
        text: 'Pinia',
        link: '/features/pinia.html',
      },
      {
        text: 'Intlify',
        link: '/features/intlify.html',
      },
      {
        text: 'Vitest',
        link: '/features/vitest.html',
      },
      {
        text: 'Cypress',
        link: '/features/cypress.html',
      },
      {
        text: 'Husky',
        link: '/features/husky.html',
      },
      {
        text: 'lint-staged',
        link: '/features/lint-staged.html',
      },
      {
        text: 'vue-tsc',
        link: '/features/vue-tsc.html',
      },
      {
        text: 'ESLint',
        link: '/features/eslint.html',
      },
      {
        text: 'Stylelint',
        link: '/features/stylelint.html',
      },
      {
        text: 'Prettier',
        link: '/features/prettier.html',
      },
      {
        text: 'VuePress',
        link: '/features/vue-press.html',
      },
    ],
  },
  {
    text: 'Reference',
    link: '/reference',
    children: [
      {
        text: 'CLI',
        link: '/reference/cli.html',
      },
      {
        text: 'CI/CD',
        link: '/reference/ci-cd.html',
      },
      {
        text: 'IDE / VSCode',
        link: '/reference/ide-vscode.html',
      },
      {
        text: 'Linters',
        link: '/reference/linters.html',
      },
      {
        text: 'Testing',
        link: '/reference/testing.html',
      },
      {
        text: 'Git Hooks',
        link: '/reference/git-hooks.html',
      },
      {
        text: 'Config',
        link: '/reference/config.html',
      },
    ],
  },
]

export default navbarConfig
