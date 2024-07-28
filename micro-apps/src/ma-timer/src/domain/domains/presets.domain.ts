import {
	makeAutoObservable,
} from "mobx"
import type { TimerPresetsDomainContract } from "../contracts"
import {
	ETimerPresets,
	ETimerTime,
} from "../models"
import { TimerDomainContract } from "../contracts"

export class TimerPresetsDomain implements TimerPresetsDomainContract {
	public preset: ETimerPresets = ETimerPresets.THREE_MINUTES
	private timerDomain: TimerDomainContract
	private presetTimes: Record<ETimerPresets, number> = {
		[ETimerPresets.CUSTOM_MINUTES]: 0,
		[ETimerPresets.THREE_MINUTES]: 3,
		[ETimerPresets.FIVE_MINUTES]: 5,
		[ETimerPresets.TEN_MINUTES]: 10,
		[ETimerPresets.FIFTEEN_MINUTES]: 15,
	}

	constructor(timerDomain: TimerDomainContract) {
		this.timerDomain = timerDomain
		makeAutoObservable(this)
	}

	public setPreset = (preset: ETimerPresets): void => {
		this.setPresetStatus(preset)

		this.resetSecondsAndHours()

		this.setMinutes(preset)

		console.log(this.preset)
	}

	private setMinutes = (preset: ETimerPresets): void => {
		this.timerDomain.setTime(ETimerTime.MINUTES, this.presetTimes[preset])
	}

	private setPresetStatus = (preset: ETimerPresets): void => {
		if (this.preset !== preset) this.preset = preset
	}

	private resetSecondsAndHours = (): void => {
		if (this.timerDomain.time.seconds !== 0) this.timerDomain.setTime(ETimerTime.SECONDS, 0)
		if (this.timerDomain.time.hours !== 0) this.timerDomain.setTime(ETimerTime.HOURS, 0)
	}
}
