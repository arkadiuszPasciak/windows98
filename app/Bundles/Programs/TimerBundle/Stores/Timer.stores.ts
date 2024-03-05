import { defineStore } from "pinia"
import Timer from "@APP|Bundles/TimerBundle/Services/Timer.services"
import { ETimerSwitcherMethod } from "@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports"
import { ETimerPresetsRadioCheck } from "@APP|Bundles/TimerBundle/Supports/TimerPresets.supports"
import {
	ITimerStoresActions,
	ITimerStoresState,
} from "@APP|Bundles/TimerBundle/Supports/TimerStores.supports"

const {
	isTimerZero,
	decreaseHoursInTimer,
	decreaseMinutesInTimer,
	verifySwitcherTime,
	updateDisplayTimesBySwitcher,
} = new Timer()

export const useTimerStore = defineStore("timer", {
	state: () =>
		({
			disabled: {
				presets: false,
				switcher: true,
			},
			interval: null,
			modal: {
				status: false,
			},
			presets: ETimerPresetsRadioCheck.THREE_MINUTES,
			status: false,
			switcher: {
				hours: 0,
				minutes: 0,
				seconds: 0,
			},
			time: {
				hours: 0,
				minutes: 3,
				seconds: 0,
			},
		} as ITimerStoresState),
	actions: {
		changeDisabledTime(status) {
			this.disabled.presets = status
			this.disabled.switcher = status
		},
		changeTimeSwitcher(method, type) {
			if (!method || !type || this.disabled.switcher) {
				return
			}

			const checkTime = verifySwitcherTime(this.switcher[type], method)

			if (!checkTime) {
				return
			}

			if (method === ETimerSwitcherMethod.INCREASE) {
				this.switcher[type] += 1
				this.time[type] += 1
			} else if (method === ETimerSwitcherMethod.DECREASE) {
				this.switcher[type] -= 1
				this.time[type] -= 1
			}
		},
		countTimer() {
			this.interval = setInterval(() => {
				if (
					isTimerZero(this.time.hours, this.time.minutes, this.time.seconds)
				) {
					this.clearTimerInterval()

					this.status = !this.status
					this.changeDisabledTime(this.status)
					this.resetTime()
					this.updateModalMessage(true)
					return
				}

				if (
					decreaseHoursInTimer(
						this.time.hours,
						this.time.minutes,
						this.time.seconds,
					)
				) {
					this.time.hours--
					this.time.minutes = 59
					this.time.seconds = 59
				} else if (
					decreaseMinutesInTimer(this.time.minutes, this.time.seconds)
				) {
					this.time.seconds = 59
					this.time.minutes--
				} else {
					this.time.seconds--
				}
			}, 1000)
		},
		clearTimerInterval() {
			if (this.interval) {
				clearInterval(this.interval)
			}
		},
		updateModalMessage(status) {
			this.modal.status = status
		},
		updatePresets(presets) {
			if (!presets) {
				return
			}

			this.showSwitcherByCustomPreset(presets)

			this.presets = presets

			const updateMinutes = updateDisplayTimesBySwitcher(presets)
			this.updateTimeByDefaultPresets(updateMinutes)
		},
		updateTimeByDefaultPresets(updateMinutes) {
			if (updateMinutes === null) {
				this.showTimeByCustomPreset()
				return
			}

			if (this.time.seconds !== 0) {
				this.time.seconds = 0
			}

			if (this.time.hours !== 0) {
				this.time.hours = 0
			}

			this.time.minutes = updateMinutes
		},
		resetTime() {
			this.switcher.seconds = 0
			this.switcher.minutes = 0
			this.switcher.hours = 0

			this.time.seconds = 0
			this.time.minutes = 0
			this.time.hours = 0
		},
		startTime() {
			this.status = !this.status

			this.changeDisabledTime(this.status)

			if (this.status) {
				this.countTimer()
			} else {
				this.clearTimerInterval()
			}
		},
		showSwitcherByCustomPreset(presets) {
			if (presets === ETimerPresetsRadioCheck.CUSTOM_MINUTES) {
				this.disabled.switcher = false
			} else if (!this.disabled.switcher) {
				this.disabled.switcher = true
			}
		},
		showTimeByCustomPreset() {
			this.time.seconds = this.switcher.seconds
			this.time.minutes = this.switcher.minutes
			this.time.hours = this.switcher.hours
		},
	} as ITimerStoresActions,
})
