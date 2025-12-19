import type { Maybe } from "@windows98/toolkit"
import type { Battery } from "./battery.type"
import type { Language } from "./language.type"
import type { Memory } from "./memory.type"
import type { Network } from "./network.type"
import type { Screen } from "./screen.type"
import type { Theme } from "./theme.type"

// TODO: Add types from browsers, devices, and operating systems
export interface Config {
	battery: Maybe<Battery>
	browserName: string | undefined
	deviceType: string | undefined
	language: Language | undefined
	memory: Maybe<Memory>
	network: Maybe<Network>
	operatingSystem: string | undefined
	screen: Maybe<Screen>
	theme: Theme | undefined
}
