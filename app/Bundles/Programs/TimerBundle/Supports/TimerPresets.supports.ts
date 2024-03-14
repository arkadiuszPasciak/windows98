export enum ETimerPresetsRadioCheck {
  THREE_MINUTES = "3 min",
  FIVE_MINUTES = "5 min",
  TEN_MINUTES = "10 min",
  FIFTEEN_MINUTES = "15 min",
  CUSTOM_MINUTES = "custom",
}

export type TTimerPresetsRadioCheck = ETimerPresetsRadioCheck

export interface ITimerPresets {
  name: string
  checked: boolean
  modelValue: ETimerPresetsRadioCheck
  text: string
}

export const timerPresetsRadioInputName = "timer-presets"
