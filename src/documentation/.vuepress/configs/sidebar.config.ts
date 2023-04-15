import type { SidebarConfig } from '@vuepress/theme-default'

const sidebarConfig: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/index.md',
        '/guide/manual-installation.md',
        '/guide/building-for-production.md',
        '/guide/run-a-development-server.md',
        '/guide/preview-a-production-server.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Reference',
      collapsible: true,
      children: ['/reference/cli.md'],
    },
  ],
}

export default sidebarConfig
