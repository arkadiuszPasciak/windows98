import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import tsconfigPaths from "vite-tsconfig-paths"
import {
	isEnvironment,
	EEnvironment,
} from "./environment.config"
import { getPathMain } from "./path.config"

export default defineConfig({
	build: {
		outDir: getPathMain("dist"),
	},
	css: {
		preprocessorOptions: {
			scss: {
				// @TODO - replace with import "@windows98/design-system" when app will have own workspace
				additionalData: `@import '${getPathMain(
					"core/design-system/src/styles/configs/index.config.scss",
				)}';`,
			},
		},
	},
	publicDir: isEnvironment(EEnvironment.TEST, process.env.NODE_ENV)
		? getPathMain("app/Public")
		: "Public",
	plugins: [
		Vue({
			include: [/\.vue$/],
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.includes("ma-")
				}
			}
		}),
		VueI18nPlugin({
			strictMessage: false,
		}),
		tsconfigPaths({ loose: true }),
	],
})
