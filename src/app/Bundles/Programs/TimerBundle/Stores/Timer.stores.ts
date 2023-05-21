import { defineStore } from 'pinia'
import { Timer } from '@APP|Bundles/TimerBundle/Services/Timer.services'
import {
  ETimerSwitcherMethod,
  TTimerSwitcherMethod,
  TTimerSwitcherType,
} from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

const TimerService = new Timer()

export const useTimerStore = defineStore('timer', {
  state: () => ({
    status: false,
    switcher: {
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  }),
  actions: {
    changeTimeSwitcher(method: TTimerSwitcherMethod, type: TTimerSwitcherType) {
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
  },
})
