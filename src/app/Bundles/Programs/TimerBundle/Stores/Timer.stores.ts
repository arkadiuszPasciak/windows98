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

const TimerService = new Timer()

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
  }),
  actions: {
    changeTimeSwitcher(
      method: TTimerSwitcherMethod,
      type: TTimerSwitcherType,
    ): void {
      if (!method || !type || this.disabled.switcher) {
        return
      }

      const checkTime = TimerService.verifyTime(this.switcher[type], method)

      if (!checkTime) {
        return
      }

      if (method === ETimerSwitcherMethod.INCREASE) {
        this.switcher[type] += 1
      } else if (method === ETimerSwitcherMethod.DECREASE) {
        this.switcher[type] -= 1
      }
    },
    updatePresets(presets: TTimerPresetsRadioCheck): void {
      if (!presets) {
        return
      }

      this.showSwitcherByCustomPreset(presets)

      this.presets = presets
    },
    startTime(): void {
      this.status = !this.status

      this.changeDisabledTime(this.status)
    },
    changeDisabledTime(status: boolean): void {
      this.disabled.presets = status
      this.disabled.switcher = status
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
    },
    resetValues(): void {
      this.resetTime()
    },
  },
})
