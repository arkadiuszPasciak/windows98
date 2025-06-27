import type { Language } from "./language.type"
import type { Theme } from "./theme.type"

export interface Storage {
	theme: Theme | undefined
	language: Language | undefined
}
