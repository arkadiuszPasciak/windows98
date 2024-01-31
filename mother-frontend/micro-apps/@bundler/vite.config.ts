import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@windows98/design-system/index.config.scss';
        `,
      },
    },
  },
  plugins: [react()],
})
