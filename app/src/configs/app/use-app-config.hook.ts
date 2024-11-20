import { MSAppConfig, MSAppConfigBuilder } from "@windows98/micro-services"
import { type AppConfig, AppLanguages, AppThemes } from "./app.types"

const defaultConfig = new MSAppConfigBuilder<AppConfig>({
	theme: undefined,
	language: undefined,
})
	.add("language", AppLanguages.ENGLISH)
	.add("theme", AppThemes.LIGHT)
	.build()

export function useAppConfig() {
	const appConfig: MSAppConfig<AppConfig> =
		MSAppConfig.getInstance(defaultConfig)

	return {
		appConfig,
	}
}
