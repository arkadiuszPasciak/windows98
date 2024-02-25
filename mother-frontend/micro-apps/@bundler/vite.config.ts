import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: 'src/wc/index.wc.ts',
      name: 'micro-apps',
      fileName: 'index',
      formats: ['es', 'umd']
    },
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react-dom', '@windows98/i18n', 'i18next', 'react-i18next'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'reactDOM',
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
  plugins: [cssInjectedByJsPlugin(), dts({ include: ['src/wc'] }), react()],
})
