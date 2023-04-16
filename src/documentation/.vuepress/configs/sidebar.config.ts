import type { SidebarConfig } from '@vuepress/theme-default'

const sidebarConfig: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/manual-installation.md',
        '/guide/building-for-production.md',
        '/guide/run-a-development-server.md',
        '/guide/preview-a-production-server.md',
      ],
    },
  ],
  '/features': [
    {
      text: 'Features',
      link: '/features',
      children: [
        '/features/vite.html',
        '/features/vue-3.html',
        '/features/typescript.html',
        '/features/scss.html',
        '/features/pinia.html',
        '/features/intlify.html',
        '/features/vitest.html',
        '/features/cypress.html',
        '/features/husky.html',
        '/features/lint-staged.html',
        '/features/vue-tsc.html',
        '/features/eslint.html',
        '/features/stylelint.html',
        '/features/prettier.html',
        '/features/vue-press.html',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Reference',
      children: ['/reference/cli.md'],
    },
  ],
  '/config/': [
    {
      text: 'Config',
      children: ['/config/github.md'],
    },
  ],
}

export default sidebarConfig
