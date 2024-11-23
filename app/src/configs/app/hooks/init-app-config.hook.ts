import { MSAppConfig, MSBrowserEnv } from "@windows98/micro-services"
import { defaultConfig } from "../builder"
import { AppLanguages, AppThemes } from "../types"

const msBrowserEnv = new MSBrowserEnv()

export function initAppConfig() {
	// TODO: Change false values to undefined in MSBrowserEnv
	const browserName = msBrowserEnv.getBrowserName() as string | undefined
	const deviceType = msBrowserEnv.getDeviceType() as string | undefined
	const operatingSystem = msBrowserEnv.getOperatingSystem() as
		| string
		| undefined

	const appConfig = defaultConfig
		.add("browserName", browserName)
		.add("deviceType", deviceType)
		.add("operatingSystem", operatingSystem)
		.add("language", AppLanguages.ENGLISH)
		.add("theme", AppThemes.LIGHT)
		.build()

	console.log(appConfig)

	MSAppConfig.getInstance(appConfig)
}
