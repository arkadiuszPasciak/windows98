import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import eslintPlugin from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'
import Markdown from 'vite-plugin-vue-markdown'
import vitestConfig from './vitest.config'
import {
  isEnvironment,
  EEnvironment,
} from '../../src/configs/environment.config'
import { getPathMain } from '../../src/configs/path.config'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: getPathMain('dist'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        // @TODO - replace with import "@windows98/design-system" when app will have own workspace
        additionalData: `@import '${getPathMain(
          'core/design-system/src/styles/configs/index.config.scss',
        )}';`,
      },
    },
  },
  publicDir: isEnvironment(EEnvironment.TEST, process.env.NODE_ENV)
    ? getPathMain('app/Public')
    : 'Public',
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      wrapperClasses: 'markdown-content',
    }),
    VueI18nPlugin({
      strictMessage: false,
    }),
    eslintPlugin({
      overrideConfigFile: getPathMain(
        'core/linters/eslint/configs/eslint.config.js',
      ),
    }),
    tsconfigPaths({ loose: true }),
  ],
  test: vitestConfig,
})
