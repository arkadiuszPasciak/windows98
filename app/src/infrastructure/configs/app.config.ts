import { MSAppConfigBuilder } from "@windows98/micro-services"
import { type Config, Language, Theme } from "../types"

export const appConfig = new MSAppConfigBuilder<Config>({
	battery: null,
	browserName: undefined,
	deviceType: undefined,
	language: Language.ENGLISH,
	memory: null,
	network: null,
	operatingSystem: undefined,
	screen: null,
	theme: Theme.LIGHT,
}).build()
