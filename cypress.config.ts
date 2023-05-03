import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    specPattern: 'src/app/Bundles/**/**/Tests/components/*.components.ts',
  },

  defaultCommandTimeout: 20000,

  e2e: {
    specPattern: 'src/app/Bundles/**/**/Tests/e2e/*.e2e.ts',
  },

  video: false,
})
