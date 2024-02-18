import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ['@windows98/i18n', 'i18next', 'react-i18next'],
      output: {
        globals: {
          '@windows98/i18n': 'i18nInit',
          'react-i18next': 'reactI18next',
          i18next: 'i18next',
        },
      },
    },
  },
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
