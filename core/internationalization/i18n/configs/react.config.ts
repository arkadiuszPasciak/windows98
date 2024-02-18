import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import { localesReact } from '../src/locales/index.config'

export default async function i18nInit(): Promise<void> {
	await i18next.use(initReactI18next).init({
		resources: localesReact,
		lng: "en",
		fallbackLng: "en"
	})
}
