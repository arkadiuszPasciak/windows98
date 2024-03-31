import { defineSemanticTokens } from "@pandacss/dev"

export const customSemanticTokens = defineSemanticTokens({
	colors: {
		primary: { value: "{colors.black.800}" },
		secondary: { value: "{colors.white.1000}" },
		tertiary: { value: "{colors.grey.100}" }
	}
})
