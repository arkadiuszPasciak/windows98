import { expect, it, describe } from 'vitest'
import { getTimeClock } from '@Bundles/ClockBundle/Services/Clock.services'

describe('[ClockBundle]<Services>(getTimeClock)', () => {
  it('should return short time', () => {
    expect(
      getTimeClock({
        timeStyle: 'short',
      }),
    ).length(5)
  })

  it('should return medium time', () => {
    expect(
      getTimeClock({
        timeStyle: 'medium',
      }),
    ).length(8)
  })

  it('should return null if params are falsy or empty', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(getTimeClock()).toBe(null)
  })
})
