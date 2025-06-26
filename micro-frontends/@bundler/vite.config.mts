import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: "../src/index.ts",
			name: "micro-frontends",
			fileName: "index",
		},
		emptyOutDir: true,
		outDir: "build",
		sourcemap: true,
		rollupOptions: {
			external: ["react", "react-dom", "mobx", "mobx-react-lite"],
			output: {
				globals: {
					react: "react",
					"react-dom": "reactDOM",
					mobx: "mobx",
					"mobx-react-lite": "mobxReactLite",
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import '@windows98/design-system/index.config.scss';
        `,
			},
		},
	},
	plugins: [react()],
})
