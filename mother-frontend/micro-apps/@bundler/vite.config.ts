import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@windows98/design-system/configs/index.config.scss';
        `,
      },
    },
  },
  plugins: [Vue(), tsconfigPaths()],
})
