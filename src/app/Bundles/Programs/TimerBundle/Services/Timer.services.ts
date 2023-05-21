import {
  ETimerSwitcherMethod,
  TTimerSwitcherMethod,
} from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

export class Timer {
  public verifyTime(time: number, method: TTimerSwitcherMethod): boolean {
    if (time === 59 && method === ETimerSwitcherMethod.INCREASE) {
      return false
    }

    if (time === 0 && method === ETimerSwitcherMethod.DECREASE) {
      return false
    }

    return true
  }
}
