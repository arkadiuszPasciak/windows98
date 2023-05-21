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
  }),
  actions: {
    changeTimeSwitcher(
      method: TTimerSwitcherMethod,
      type: TTimerSwitcherType,
    ): void {
      if (!method || !type) {
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

      this.presets = presets
    },
  },
})
