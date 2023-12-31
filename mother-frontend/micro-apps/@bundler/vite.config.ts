import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [Vue(), tsconfigPaths()],
})
