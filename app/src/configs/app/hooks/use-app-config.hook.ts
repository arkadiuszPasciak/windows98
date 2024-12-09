import { MSAppConfig } from "@windows98/micro-services"
import { defaultConfig } from "../configs"
import type { AppConfig } from "../types"

export function useAppConfig() {
	const appConfig: MSAppConfig<AppConfig> =
		MSAppConfig.getInstance(defaultConfig)

	return appConfig
}
