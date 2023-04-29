import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import Markdown from 'vite-plugin-vue-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: '../../dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/app/Assets/Styles/Config/config.styles.scss';`,
      },
    },
  },
  publicDir: 'Public',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperClasses: 'markdown-content',
    }),
    VueI18nPlugin({}),
    eslintPlugin(),
    tsconfigPaths({ loose: true }),
  ],
  root: 'src/app',
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.units.ts', '**/*.snapshots.ts'],
    setupFiles: ['Configs/VueTestUtils.config.ts'],
    resolveSnapshotPath: (testPath, snapshotExtension) => {
      return (
        testPath.replace('/__snapshots__', '').replace('.ts', '') +
        snapshotExtension
      )
    },
    outputDiffMaxSize: 50000,
  },
})
