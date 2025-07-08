import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import dts from "vite-plugin-dts"

export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: "../src/index.ts",
			name: "design-system",
			fileName: "index",
		},
		emptyOutDir: true,
		outDir: "build",
		sourcemap: true,
		rollupOptions: {
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "react",
					"react-dom": "reactDOM",
				},
			},
		},
	},
	plugins: [cssInjectedByJsPlugin(), dts({ include: ["../src"] }), react()],
})
