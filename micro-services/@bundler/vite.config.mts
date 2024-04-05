import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: true,
		outDir: "build",
		sourcemap: true,
	},
	plugins: [
		dts({ include: ["../src/"] }),
	],
})
