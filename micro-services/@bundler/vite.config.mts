import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		lib: {
			entry: "../src/index.ts",
			name: "micro-services",
			fileName: "index",
			formats: ["es", "umd"],
		},
		outDir: "build",
		sourcemap: true,
	},
	plugins: [dts({ include: ["../src/"] })],
})
