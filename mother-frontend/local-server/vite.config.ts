import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getPathMain } from '../../src/configs/path.config'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // @TODO - replace with import "@windows98/design-system" when app will have own workspace
        additionalData: `@import '${getPathMain(
          'core/design-system/configs/index.config.scss',
        )}';`,
      },
    },
  },
  publicDir: 'public',
  plugins: [vue()],
})
