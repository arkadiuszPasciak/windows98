import { defineConfig } from 'cypress'
import viteConfig from '../../../../app/configs/vite.config'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig,
    },
    indexHtmlFile: 'src/support/component-index.html',
    supportFile: 'src/support/component.ts',
    specPattern: '../../../app/Bundles/**/**/Tests/components/*.components.ts',
  },

  defaultCommandTimeout: 20000,

  downloadsFolder: 'src/download',
  fixturesFolder: 'src/fixtures',
  screenshotsFolder: 'src/screenshots',
  videosFolder: 'src/videos',

  video: false,
})
