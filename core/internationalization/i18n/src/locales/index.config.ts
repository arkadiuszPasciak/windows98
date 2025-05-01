import localesDE from "../locales/de"
import localesEN from "../locales/en"
import localesPL from "../locales/pl"
import localesMicroFrontendsDE from "./micro-frontends/de"
import localesMicroFrontendsEN from "./micro-frontends/en"
import localesMicroFrontendsPL from "./micro-frontends/pl"

const locales = {
	de: {
		...localesDE,
		...localesMicroFrontendsDE,
	},
	en: {
		...localesEN,
		...localesMicroFrontendsEN,
	},
	pl: {
		...localesPL,
		...localesMicroFrontendsPL,
	},
}

export const localesReact = {
	de: {
		translation: {
			...localesMicroFrontendsDE,
		},
	},
	en: {
		translation: {
			...localesMicroFrontendsEN,
		},
	},
	pl: {
		translation: {
			...localesMicroFrontendsPL,
		},
	},
}

export default locales
