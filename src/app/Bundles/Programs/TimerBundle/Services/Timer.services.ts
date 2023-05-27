import {
  ETimerSwitcherMethod,
  TTimerSwitcherMethod,
} from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'
import {
  TTimerPresetsRadioCheck,
  ETimerPresetsRadioCheck,
} from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

export class Timer {
  public verifySwitcherTime(
    time: number,
    method: TTimerSwitcherMethod,
  ): boolean {
    if (time === 59 && method === ETimerSwitcherMethod.INCREASE) {
      return false
    }

    if (time === 0 && method === ETimerSwitcherMethod.DECREASE) {
      return false
    }

    return true
  }
  public isTimerZero(hours: number, minutes: number, seconds: number): boolean {
    return hours === 0 && minutes === 0 && seconds === 0 ? true : false
  }
  public decreaseHoursInTimer(
    hours: number,
    minutes: number,
    seconds: number,
  ): boolean {
    return hours >= 1 && minutes === 0 && seconds === 0 ? true : false
  }
  public decreaseMinutesInTimer(minutes: number, seconds: number): boolean {
    return seconds === 0 && minutes >= 1 ? true : false
  }
  public updateDisplayTimesBySwitcher(
    presets: TTimerPresetsRadioCheck,
  ): null | number {
    switch (presets) {
      case ETimerPresetsRadioCheck.THREE_MINUTES:
        return 3
      case ETimerPresetsRadioCheck.FIVE_MINUTES:
        return 5
      case ETimerPresetsRadioCheck.TEN_MINUTES:
        return 10
      case ETimerPresetsRadioCheck.FIFTEEN_MINUTES:
        return 15
      case ETimerPresetsRadioCheck.CUSTOM_MINUTES:
      default:
        return null
    }
  }
}
