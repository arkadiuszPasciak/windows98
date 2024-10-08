import localesEN from "../locales/en"
import localesPL from "../locales/pl"
import localesMicroAppsEN from "./micro-apps/en"
import localesMicroAppsPL from "./micro-apps/pl"

const locales = {
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
