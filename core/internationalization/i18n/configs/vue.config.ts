import { createI18n } from "vue-i18n"
import locales from "../src/locales/index.config"
// import type { I18nConfig } from '../src/types/config.type'

const vueI18n = createI18n({
	availableLocales: ["en", "pl"],
	locale: "en",
	messages: locales,
	fallbackLocale: "en",
	legacy: false,
	// @TODO - add proper typing
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any)

export default vueI18n
