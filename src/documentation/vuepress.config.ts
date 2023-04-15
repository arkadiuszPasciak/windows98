import { defaultTheme, defineUserConfig } from 'vuepress'
import navbarConfig from './.vuepress/configs/navbar.config'
import sidebarConfig from './.vuepress/configs/sidebar.config'

export default defineUserConfig({
  lang: 'en-GB',
  title: 'Windows98',
  theme: defaultTheme({
    navbar: navbarConfig,
    sidebar: sidebarConfig,
  }),
})
