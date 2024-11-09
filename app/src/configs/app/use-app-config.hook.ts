import { MSAppConfig } from "@windows98/micro-services"
import { AppLanguages, AppThemes } from "./app.types"

export function useAppConfig() {
	const appConfig: MSAppConfig<AppThemes, AppLanguages> =
		MSAppConfig.getInstance(AppLanguages.ENGLISH, AppThemes.LIGHT)

	return {
		appConfig,
	}
}
