import { MSAppConfig } from "@windows98/micro-services"
import { appConfig } from "../configs"
import type { Config } from "../types"

export const AppConfigService: MSAppConfig<Config> =
	MSAppConfig.getInstance(appConfig)
