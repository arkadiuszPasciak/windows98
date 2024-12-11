import {
	MSAppConfig,
	MSBrowserEnv,
	MSLanguage,
	MSTheme,
} from "@windows98/micro-services"
import { useI18n } from "vue-i18n"
import { initConfig } from "../builder"
import { defaultConfig } from "../configs"
import type { AppLanguages, AppThemes } from "../types"
import { useLocalStorage } from "./use-local-storage.hook"

const msBrowserEnv = new MSBrowserEnv()
const msTheme = new MSTheme<AppThemes>()
const msLanguage = new MSLanguage<AppLanguages>()

export function initAppConfig() {
	const localStorage = useLocalStorage()
	const { locale } = useI18n()

	// TODO: Change false values to undefined in MSBrowserEnv
	const browserName = msBrowserEnv.getBrowserName() as string | undefined
	const deviceType = msBrowserEnv.getDeviceType() as string | undefined
	const operatingSystem = msBrowserEnv.getOperatingSystem() as
		| string
		| undefined

	const language = localStorage.get("language") ?? defaultConfig.language
	const theme = localStorage.get("theme") ?? defaultConfig.theme

	const appConfig = initConfig
		.add("browserName", browserName)
		.add("deviceType", deviceType)
		.add("operatingSystem", operatingSystem)
		.add("language", language)
		.add("theme", theme)
		.build()

	MSAppConfig.getInstance(appConfig)

	if (language) {
		locale.value = language
		msLanguage.updateLanguage(language)
	}

	if (theme) msTheme.updateTheme(theme)
}
