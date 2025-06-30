import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { localesReact } from "../src/locales/index.config"

i18n.use(initReactI18next).init({
	resources: localesReact,
	lng: "en",
	fallbackLng: "en",
	initImmediate: false,
})

export default i18n
