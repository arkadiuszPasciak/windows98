import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: '../src/index.ts',
      name: 'design-system',
      fileName: 'index',
    },
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: "react",
          "react-dom": "reactDOM",
        },
      }
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '../src/styles/configs/index.config.scss';
        `,
      },
    },
  },
  plugins: [
    cssInjectedByJsPlugin(), 
    dts({ include: ['../src']}),
    react()
  ],
})
