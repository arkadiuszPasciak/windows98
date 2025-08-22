import localesMicroFrontendsDE from "./micro-frontends/de"
import localesMicroFrontendsEN from "./micro-frontends/en"
import localesMicroFrontendsPL from "./micro-frontends/pl"

const locales = {
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
