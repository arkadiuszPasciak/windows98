import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueI18n(), eslintPlugin(), tsconfigPaths()],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, './src/Assets'),
      '@Bundles': path.resolve(__dirname, './src/Bundles'),
      '@Config': path.resolve(__dirname, './src/Config'),
      '@Views': path.resolve(__dirname, './src/Views'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@Assets/Styles/Config/config.styles.scss';`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.unit.ts'],
  },
})
