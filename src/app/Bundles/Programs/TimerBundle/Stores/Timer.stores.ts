import { defineStore } from 'pinia'
import { Timer } from '@APP|Bundles/TimerBundle/Services/Timer.services'
import {
  ETimerSwitcherMethod,
  TTimerSwitcherMethod,
  TTimerSwitcherType,
} from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'
import {
  TTimerPresetsRadioCheck,
  ETimerPresetsRadioCheck,
} from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

const {
  isTimerFinish,
  decreaseHoursInTimer,
  decreaseMinutesInTimer,
  verifySwitcherTime,
  updateDisplayTimesBySwitcher,
} = new Timer()

export const useTimerStore = defineStore('timer', {
  state: () => ({
    presets: ETimerPresetsRadioCheck.THREE_MINUTES as TTimerPresetsRadioCheck,
    status: false,
    switcher: {
      hours: 0 as number,
      minutes: 0 as number,
      seconds: 0 as number,
    },
    disabled: {
      presets: false,
      switcher: true,
    },
    time: {
      hours: 0 as number,
      minutes: 3 as number,
      seconds: 0 as number,
    },
  }),
  actions: {
    changeTimeSwitcher(
      method: TTimerSwitcherMethod,
      type: TTimerSwitcherType,
    ): void {
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
    updatePresets(presets: TTimerPresetsRadioCheck): void {
      if (!presets) {
        return
      }

      this.showSwitcherByCustomPreset(presets)

      this.presets = presets

      const updateMinutes = updateDisplayTimesBySwitcher(presets)
      this.updateTimeByDefaultPresets(updateMinutes)
    },
    updateTimeByDefaultPresets(updateMinutes: null | number): void {
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
    startTime(): void {
      this.status = !this.status

      this.changeDisabledTime(this.status)

      this.countTimer()
    },
    changeDisabledTime(status: boolean): void {
      this.disabled.presets = status
      this.disabled.switcher = status
    },
    showTimeByCustomPreset(): void {
      this.time.seconds = this.switcher.seconds
      this.time.minutes = this.switcher.minutes
      this.time.hours = this.switcher.hours
    },
    showSwitcherByCustomPreset(presets: TTimerPresetsRadioCheck): void {
      if (presets === ETimerPresetsRadioCheck.CUSTOM_MINUTES) {
        this.disabled.switcher = false
      } else if (!this.disabled.switcher) {
        this.disabled.switcher = true
      }
    },
    resetTime(): void {
      this.switcher.seconds = 0
      this.switcher.minutes = 0
      this.switcher.hours = 0

      this.time.seconds = 0
      this.time.minutes = 0
      this.time.hours = 0
    },
    resetValues(): void {
      this.resetTime()
    },
    countTimer(): void {
      const interval = setInterval(() => {
        if (
          isTimerFinish(this.time.hours, this.time.minutes, this.time.seconds)
        ) {
          clearInterval(interval)

          console.log('interval is clean', interval)
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
  },
})
