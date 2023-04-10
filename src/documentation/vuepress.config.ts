import { defaultTheme, defineUserConfig } from 'vuepress'
import navbarConfig from './.vuepress/configs/navbar.config'
import sidebarConfig from './.vuepress/configs/sidebar.config'

export default defineUserConfig({
  lang: 'en-GB',
  title: 'Hello VuePress',
  description: 'Just playing around',
  theme: defaultTheme({
    navbar: navbarConfig,
    sidebar: sidebarConfig,
  }),
})
