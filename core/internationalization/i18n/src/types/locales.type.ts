import type { I18nLanguageTypes } from "./languages.type"
import type { I18nLocaleSkeleton } from "./locale-skeleton.type"

export type I18nLocalesConfig = {
	[language in I18nLanguageTypes]: I18nLocaleSkeleton
}
