import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import locales from '../src/locales/index.config'

export default async function i18nInit(): Promise<void> {
	await i18next.use(initReactI18next).init({
		resources: locales,
		lng: "en",
		fallbackLng: "en"
	})
}
