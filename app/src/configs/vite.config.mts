import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@windows98/design-system/index.config.scss";`,
			},
		},
	},
	plugins: [
		Vue({
			include: [/\.vue$/],
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.includes("ma-"),
				},
			},
		}),
		VueI18nPlugin({
			strictMessage: false,
		}),
		tsconfigPaths({ loose: true }),
	],
})
