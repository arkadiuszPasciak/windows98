import { defineConfig } from 'cypress'
import viteConfig from './vite.config'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: 'src/app/Bundles/**/**/Tests/components/*.components.ts',
  },

  defaultCommandTimeout: 20000,

  e2e: {
    specPattern: 'src/app/Bundles/**/**/Tests/e2e/*.e2e.ts',
  },

  video: false,
})
