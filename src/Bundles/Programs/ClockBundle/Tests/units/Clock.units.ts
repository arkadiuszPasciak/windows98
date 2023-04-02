import { expect, it, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import {
  isAmericanTime,
  getTimeClock,
} from '@Bundles/ClockBundle/Services/Clock.services'
import { useClockStore } from '@Bundles/ClockBundle/Stores/Clock.stores'

describe('[ClockBundle]<Services>(getTimeClock)', () => {
  it('should return short time', () => {
    const time = getTimeClock({
      timeStyle: 'short',
    })

    expect(time).not.toBe(null)

    if (time && isAmericanTime(time)) {
      expect(time).length(8)
    } else if (time) {
      expect(time).length(5)
    }
  })

  it('should return medium time', () => {
    const time = getTimeClock({
      timeStyle: 'medium',
    })

    expect(time).not.toBe(null)

    if (time && isAmericanTime(time)) {
      expect(time).length(11)
    } else if (time) {
      expect(time).length(8)
    }
  })

  it('should return null if params are falsy or empty', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getTimeClock()).toBe(null)
  })
})

describe('[ClockBundle]<Stores>(useClockStore)', () => {
  setActivePinia(createPinia())
  const clock = useClockStore()

  it('has default time', () => {
    expect(clock.time).toBe('12:00 PM')
  })

  it('changes time on updateTime', () => {
    clock.time = 'default value to check update'
    const defaultValue = clock.time as string

    clock.updateTime()

    expect(clock.time).not.toBe(null)

    if (isAmericanTime(clock.time)) {
      expect(clock.time).length(8).not.equal(defaultValue)
    } else {
      expect(clock.time).length(5).not.equal(defaultValue)
    }
  })
})
