import { defineConfig } from 'vitepress'
import navbarConfig from './configs/navbar.config'
import sidebarConfig from './configs/sidebar.config'

export default defineConfig({
  title: 'Windows98 Documentation',
  description: 'A VitePress Site',
  themeConfig: {
    nav: navbarConfig,

    sidebar: sidebarConfig,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/arkadiuszPasciak/windows98' },
    ],
  },
})