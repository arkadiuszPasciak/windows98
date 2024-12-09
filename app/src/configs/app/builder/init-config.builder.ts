import { MSAppConfigBuilder } from "@windows98/micro-services"
import type { AppConfig } from "../types"

export const initConfig = new MSAppConfigBuilder<AppConfig>({
	browserName: undefined,
	deviceType: undefined,
	language: undefined,
	operatingSystem: undefined,
	theme: undefined,
})
