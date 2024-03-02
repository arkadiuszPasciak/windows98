import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths({ loose: true })],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['../../../app/Bundles/**/*.unit.ts', '../../../app/Bundles/**/*.units.ts'],
  },
})
