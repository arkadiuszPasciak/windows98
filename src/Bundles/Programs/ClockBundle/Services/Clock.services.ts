import { Nullable } from 'vitest'
import { IClockGetTime } from '@Bundles/ClockBundle/Supports/Clock.supports'

export function isAmericanTime(time: string): Nullable<boolean> {
  if (!time) {
    return null
  }

  if (time.includes('PM') || time.includes('AM')) {
    return true
  } else {
    return false
  }
}

export function getTimeClock(params: IClockGetTime): Nullable<string> {
  if (!params) {
    return null
  }

  const { timeStyle } = params
  const date = new Date()

  return date.toLocaleString([], { timeStyle: timeStyle })
}
