import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },

  e2e: {
    specPattern: './src/Bundles/**/Tests/e2e/*.e2e.ts',
  },
})
