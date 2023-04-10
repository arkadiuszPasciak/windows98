import type { SidebarConfig } from '@vuepress/theme-default'

const sidebarConfig: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/index.md',
        '/guide/getting-started/manual-installation.md',
      ],
    },
  ],
}

export default sidebarConfig
