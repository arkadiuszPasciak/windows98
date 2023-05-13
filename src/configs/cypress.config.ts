import { defineConfig } from 'cypress'
import viteConfig from '../../vite.config'
import { getPathMain } from '@CONFIGS/path.config'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig,
    },
    indexHtmlFile: getPathMain('src/cypress/support/component-index.html'),
    supportFile: getPathMain('src/cypress/support/component.ts'),
    specPattern: getPathMain(
      'src/app/Bundles/**/**/Tests/components/*.components.ts',
    ),
  },

  defaultCommandTimeout: 20000,

  e2e: {
    specPattern: getPathMain('src/app/Bundles/**/**/Tests/e2e/*.e2e.ts'),
  },

  downloadsFolder: getPathMain('src/cypress/download'),
  fixturesFolder: getPathMain('src/cypress/fixtures'),
  screenshotsFolder: getPathMain('src/cypress/screenshots'),
  videosFolder: getPathMain('src/cypress/videos'),

  video: false,
})
