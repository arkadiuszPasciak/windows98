import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: 'src/Bundles/**/**/Tests/components/*.components.ts',
  },

  defaultCommandTimeout: 10000,

  e2e: {
    specPattern: 'src/Bundles/**/**/Tests/e2e/*.e2e.ts',
  },

  video: false,
})
