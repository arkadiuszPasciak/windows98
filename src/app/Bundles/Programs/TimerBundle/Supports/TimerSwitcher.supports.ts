export enum ETimerSwitcherMethod {
  DECREASE = 'decrease',
  INCREASE = 'increase',
}

export enum ETimerSwitcherType {
  HOURS = 'hours',
  MINUTES = 'minutes',
  SECONDS = 'seconds',
}

export interface ITimerSwitcherType {
  hours: string
  minutes: string
  seconds: string
}

export type TTimerSwitcherMethod = ETimerSwitcherMethod

export type TTimerSwitcherType = ETimerSwitcherType
