import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		lib: {
			entry: "../src/index.ts",
			name: "web",
			fileName: "index",
			formats: ["es", "umd"],
		},
		outDir: "dist",
		sourcemap: true,
	},
	plugins: [dts({ include: ["../src/"] })],
})
