import localesDE from "../locales/de"
import localesEN from "../locales/en"
import localesPL from "../locales/pl"
import localesMicroAppsDE from "./micro-apps/de"
import localesMicroAppsEN from "./micro-apps/en"
import localesMicroAppsPL from "./micro-apps/pl"

const locales = {
	de: {
		...localesDE,
		...localesMicroAppsDE,
	},
	en: {
		...localesEN,
		...localesMicroAppsEN,
	},
	pl: {
		...localesPL,
		...localesMicroAppsPL,
	},
}

export const localesReact = {
	de: {
		translation: {
			...localesMicroAppsDE,
		},
	},
	en: {
		translation: {
			...localesMicroAppsEN,
		},
	},
	pl: {
		translation: {
			...localesMicroAppsPL,
		},
	},
}

export default locales
