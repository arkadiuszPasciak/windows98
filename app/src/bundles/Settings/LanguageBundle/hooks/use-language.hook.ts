import type { TUISelectPropsObject } from "@APP/src/bundles/UI/UISelectBundle/Supports/UISelect.supports"
import { AppLanguages } from "@APP/src/configs/app"
import { useAppConfig, useLocalStorage } from "@APP/src/configs/app"
import { MSLanguage } from "@windows98/micro-services"
import { onBeforeMount, ref } from "vue"
import { useI18n } from "vue-i18n"

const msLanguage = new MSLanguage<AppLanguages>()

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
		msLanguage.updateLanguage(language)
	}

	return {
		currentLanguage,
		languages,
		toggleLanguage,
	}
}
