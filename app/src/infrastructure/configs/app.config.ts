import { MSAppConfigBuilder } from "@windows98/micro-services"
import { type Config, Language, Theme } from "../types"

export const appConfig = new MSAppConfigBuilder<Config>({
	browserName: undefined,
	deviceType: undefined,
	language: Language.ENGLISH,
	operatingSystem: undefined,
	theme: Theme.LIGHT,
}).build()
