import { MSAppConfigBuilder } from "@windows98/micro-services"
import { type Config, Language, Theme } from "../types"

export const appConfig = new MSAppConfigBuilder<Config>({
	battery: null,
	browserName: null,
	deviceType: null,
	language: Language.ENGLISH,
	memory: null,
	network: null,
	operatingSystem: null,
	screen: null,
	theme: Theme.LIGHT,
}).build()
