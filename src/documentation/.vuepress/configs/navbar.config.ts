import type { NavbarConfig } from '@vuepress/theme-default'

const navbarConfig: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Reference',
    link: '/reference',
    children: [
      {
        text: 'CLI',
        link: '/reference/cli.html',
      },
    ],
  },
]

export default navbarConfig
