import { createI18n } from "vue-i18n"
import locales from "../src/locales/index.config"

const vueI18n = createI18n({
	availableLocales: ["en", "pl"],
	locale: "en",
	messages: locales,
	fallbackLocale: "en",
	legacy: false,
})

export default vueI18n
