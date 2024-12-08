import { MSAppConfig, MSBrowserEnv, MSTheme } from "@windows98/micro-services"
import { initConfig } from "../builder"
import { defaultConfig } from "../configs"
import type { AppThemes } from "../types"
import { useLocalStorage } from "./use-local-storage.hook"

const msBrowserEnv = new MSBrowserEnv()
const msTheme = new MSTheme<AppThemes>()

export function initAppConfig() {
	const localStorage = useLocalStorage()

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

	if (theme) msTheme.updateTheme(theme)
}
