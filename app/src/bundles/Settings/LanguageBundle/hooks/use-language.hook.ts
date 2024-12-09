import type { TUISelectPropsObject } from "@APP/src/bundles/UI/UISelectBundle/Supports/UISelect.supports"
import { AppLanguages } from "@APP/src/configs/app"
import { useAppConfig, useLocalStorage } from "@APP/src/configs/app"
import { onBeforeMount, ref } from "vue"
import { useI18n } from "vue-i18n"
import { updateLangAttribute } from "../Services/Language.services"

export function useLanguage() {
	const appConfig = useAppConfig()
	const localStorage = useLocalStorage()
	const { locale } = useI18n()

	const currentLanguage = ref<AppLanguages | undefined>(undefined)

	onBeforeMount(() => {
		currentLanguage.value = appConfig.get("language")
	})

	const languages: TUISelectPropsObject = [
		{
			value: AppLanguages.ENGLISH,
			name: `LanguageBundle.${AppLanguages.ENGLISH}`,
		},
		{
			value: AppLanguages.POLISH,
			name: `LanguageBundle.${AppLanguages.POLISH}`,
		},
	]

	const toggleLanguage = (language: AppLanguages): void => {
		if (currentLanguage.value === language) return

		currentLanguage.value = language
		appConfig.set("language", language)
		localStorage.set("language", language)
		locale.value = language
		updateLangAttribute(language)
	}

	return {
		currentLanguage,
		languages,
		toggleLanguage,
	}
}
