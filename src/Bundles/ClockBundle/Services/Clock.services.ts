import { Nullable } from 'vitest'
import { IGetTimeClock } from '@Bundles/ClockBundle/Supports/Clock.supports'

export function getTimeClock(params: IGetTimeClock): Nullable<string> {
  const { timeStyle } = params
  const date = new Date()

  return date.toLocaleString([], { timeStyle: timeStyle })
}
