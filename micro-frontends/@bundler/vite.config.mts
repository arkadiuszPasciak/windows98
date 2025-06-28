import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import dts from "vite-plugin-dts"

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
			external: [
				"react",
				"react-dom",
				"mobx",
				"mobx-react-lite",
				"i18next",
				"react-i18next",
			],
			output: {
				globals: {
					react: "react",
					"react-dom": "reactDOM",
					mobx: "mobx",
					"mobx-react-lite": "mobxReactLite",
					i18next: "i18next",
					"react-i18next": "reactI18next",
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
	plugins: [cssInjectedByJsPlugin(), dts({ include: ["../src"] }), react()],
})
