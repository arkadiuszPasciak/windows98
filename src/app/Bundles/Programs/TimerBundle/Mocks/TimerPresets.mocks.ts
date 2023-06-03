import {
  ETimerPresetsRadioCheck,
  ITimerPresets,
  timerPresetsRadioInputName,
} from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

export const MTimerPresets = [
  {
    name: timerPresetsRadioInputName,
    checked: true,
    modelValue: ETimerPresetsRadioCheck.THREE_MINUTES,
    text: 'TimerBundle.presets.three-minutes',
  },
  {
    name: timerPresetsRadioInputName,
    checked: false,
    modelValue: ETimerPresetsRadioCheck.FIVE_MINUTES,
    text: 'TimerBundle.presets.five-minutes',
  },
  {
    name: timerPresetsRadioInputName,
    checked: false,
    modelValue: ETimerPresetsRadioCheck.TEN_MINUTES,
    text: 'TimerBundle.presets.ten-minutes',
  },
  {
    name: timerPresetsRadioInputName,
    checked: false,
    modelValue: ETimerPresetsRadioCheck.FIFTEEN_MINUTES,
    text: 'TimerBundle.presets.fifteen-minutes',
  },
  {
    name: timerPresetsRadioInputName,
    checked: false,
    modelValue: ETimerPresetsRadioCheck.CUSTOM_MINUTES,
    text: 'TimerBundle.presets.custom',
  },
] as Array<ITimerPresets>
