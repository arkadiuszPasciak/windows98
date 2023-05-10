import { defineConfig } from 'cypress'
import viteConfig from './vite.config'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig,
    },
    indexHtmlFile: 'src/cypress/support/component-index.html',
    supportFile: 'src/cypress/support/component.ts',
    specPattern: 'src/app/Bundles/**/**/Tests/components/*.components.ts',
  },

  defaultCommandTimeout: 20000,

  e2e: {
    specPattern: 'src/app/Bundles/**/**/Tests/e2e/*.e2e.ts',
  },

  downloadsFolder: 'src/cypress/download',
  fileServerFolder: 'src',
  fixturesFolder: 'src/cypress/fixtures',
  screenshotsFolder: 'src/cypress/screenshots',
  videosFolder: 'src/cypress/videos',

  video: false,
})
