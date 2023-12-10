import {
  TTimerSwitcherMethod,
  TTimerSwitcherType,
} from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'
import { TTimerPresetsRadioCheck } from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

interface ITimerTimes {
  hours: number
  minutes: number
  seconds: number
}

export interface ITimerStoresState {
  disabled: {
    presets: boolean
    switcher: boolean
  }
  interval: null | NodeJS.Timeout
  modal: {
    status: boolean
  }
  presets: TTimerPresetsRadioCheck
  status: boolean
  switcher: ITimerTimes
  time: ITimerTimes
}

export interface ITimerStoresActions extends ITimerStoresState {
  changeDisabledTime(status: boolean): void
  changeTimeSwitcher(
    method: TTimerSwitcherMethod,
    type: TTimerSwitcherType,
  ): void
  countTimer(): void
  clearTimerInterval(): void
  updateModalMessage(status: boolean): void
  updatePresets(presets: TTimerPresetsRadioCheck): void
  updateTimeByDefaultPresets(updateMinutes: null | number): void
  resetTime(): void
  startTime(): void
  showSwitcherByCustomPreset(presets: TTimerPresetsRadioCheck): void
  showTimeByCustomPreset(): void
}
