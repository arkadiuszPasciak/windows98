import { MSAppConfig, MSAppConfigBuilder } from "@windows98/micro-services"
import { AppLanguages, AppThemes } from "./app.types"

const defaultConfig = new MSAppConfigBuilder<AppThemes, AppLanguages>()
	.addLanguage(AppLanguages.ENGLISH)
	.addTheme(AppThemes.LIGHT)
	.build()

export function useAppConfig() {
	const appConfig: MSAppConfig<AppThemes, AppLanguages> =
		MSAppConfig.getInstance(defaultConfig)

	return {
		appConfig,
	}
}
