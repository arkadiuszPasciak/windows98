import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		include: ["./../**/*.unit.ts"],
	},
})
