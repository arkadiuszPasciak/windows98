import type { Language } from "./language.type"
import type { Theme } from "./theme.type"

// TODO: Add types from browsers, devices, and operating systems
export interface Config {
	browserName: string | undefined
	deviceType: string | undefined
	language: Language | undefined
	operatingSystem: string | undefined
	theme: Theme | undefined
}
