import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"
import dts from "vite-plugin-dts"

export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: "src/wc/index.wc.ts",
			name: "micro-frontends",
			fileName: "index",
			formats: ["es", "umd"],
		},
		emptyOutDir: true,
		outDir: "build",
		sourcemap: true,
		rollupOptions: {
			external: [
				"i18next",
				"react",
				"react-dom",
				"react-i18next",
				"mobx",
				"mobx-react-lite",
			],
			output: {
				globals: {
					i18next: "i18next",
					react: "react",
					"react-dom": "reactDOM",
					"react-i18next": "reactI18next",
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
	plugins: [cssInjectedByJsPlugin(), dts({ include: ["src/wc"] }), react()],
})
