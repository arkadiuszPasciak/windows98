import { Nullable } from 'vitest'

export function getTimezone(date: Date): Nullable<number> {
  if (!date) {
    return null
  }

  const offset = date.getTimezoneOffset()

  return -offset / 60
}
