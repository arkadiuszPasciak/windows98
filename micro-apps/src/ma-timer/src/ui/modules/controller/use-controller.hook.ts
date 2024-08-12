import { State } from "@windows98/toolkit"
import { ETimerPresets } from "../../../domain/models"
import { useTimer } from "../../hooks"

export function useController() {
	const { timerDomain } = useTimer()

	const state = timerDomain.presetsDomain.preset !== ETimerPresets.CUSTOM_MINUTES ? State.DISABLED : State.ACTIVE
	const isDisabled = state === State.DISABLED ? true : false

	return {
		hours: timerDomain.time.hours,
		minutes: timerDomain.time.minutes,
		seconds: timerDomain.time.seconds,
		increaseSeconds: timerDomain.controllerDomain.increaseSeconds,
		decreaseSeconds: timerDomain.controllerDomain.decreaseSeconds,
		increaseMinutes: timerDomain.controllerDomain.increaseMinutes,
		decreaseMinutes: timerDomain.controllerDomain.decreaseMinutes,
		increaseHours: timerDomain.controllerDomain.increaseHours,
		decreaseHours: timerDomain.controllerDomain.decreaseHours,
		isDisabled,
	}
}
