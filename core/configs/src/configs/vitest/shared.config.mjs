import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: "jsdom",
        exclude: [
            "**/build/**",
            "**/dist/**",
            "**/node_modules/**",
            "**/@bundler/**",
            "**/@linter/**",
            "**/@test/**",
        ],
        include: [
            "**/*.unit.ts"
        ],
        globals: true,
    },
})
