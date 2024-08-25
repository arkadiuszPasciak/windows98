import type { IClockGetTime } from "@APP/src/bundles/Programs/ClockBundle/Supports/Clock.supports"
import type { Nullable } from "vitest"

export function getTimeClock(params: IClockGetTime): Nullable<string> {
	if (!params) {
		return null
	}

	const { timeStyle } = params
	const date = new Date()

	return date.toLocaleString([], { timeStyle: timeStyle })
}
