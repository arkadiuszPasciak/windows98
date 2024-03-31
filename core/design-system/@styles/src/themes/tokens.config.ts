import type { Config } from "@pandacss/dev"

export const customTokens: Config["theme"] = {
	tokens: {
		colors: {
			black: {
				800: { value: "#222222" },
				900: { value: "#0a0a0a" },
				1000: { value: "#000000" },
			},
			blue: {
				400: { value: "#0000ff" },
				500: { value: "#330099" },
				600: { value: "#1084d0" },
				700: { value: "#0f0f81" },
				800: { value: "#007b7b" },
				900: { value: "#000080" },
			},
			grey: {
				25: { value: "#dfdfdf" },
				50: { value: "#c0c0c0" },
				100: { value: "#b5b5b5" },
				200: { value: "#a9a9a9" },
				300: { value: "#9b9b9b" },
				400: { value: "#969696" },
				500: { value: "#8b8b8b" },
				600: { value: "#808080" },
				700: { value: "#3b3b3b" },
			},
			red: {
				500: { value: "#fe0000" },
			},
			white: {
				1000: { value: "#ffffff" },
			}
		}
	}
}
