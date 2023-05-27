import { expect, it, describe } from 'vitest'
import Timer from '@APP|Bundles/TimerBundle/Services/Timer.services'
import { ETimerPresetsRadioCheck } from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'

const TimerService = new Timer()

describe('[TimerBundle]<Services>(decreaseHoursInTimer)', () => {
  it('increases hours when hour is upper than or equal 1', async () => {
    expect(TimerService.decreaseHoursInTimer(1, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(2, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(3, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(4, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(5, 0, 0)).toBe(true)
  })

  it('doesn`t increase hours when hour is equal or lower 0', async () => {
    expect(TimerService.decreaseHoursInTimer(0, 0, 1)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 1, 2)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 2, 3)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 3, 4)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 0, 0)).toBe(false)
  })
})

describe('[TimerBundle]<Services>(decreaseMinutesInTimer)', () => {
  it('increases minutes when minutes is upper than or equal 1', async () => {
    expect(TimerService.decreaseMinutesInTimer(1, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(2, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(3, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(4, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(5, 0)).toBe(true)
  })

  it('doesn`t increase hours when minutes is equal 0', async () => {
    expect(TimerService.decreaseMinutesInTimer(0, 1)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 2)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 3)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 4)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 0)).toBe(false)
  })
})

describe('[TimerBundle]<Services>(updateDisplayTimesBySwitcher)', () => {
  it('should return 3', async () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.THREE_MINUTES,
      ),
    ).toBe(3)
  })

  it('should return 5', async () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.FIVE_MINUTES,
      ),
    ).toBe(5)
  })

  it('should return 10', async () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.TEN_MINUTES,
      ),
    ).toBe(10)
  })

  it('should return 15', async () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.FIFTEEN_MINUTES,
      ),
    ).toBe(15)
  })

  it('should return null', async () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.CUSTOM_MINUTES,
      ),
    ).toBe(null)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(TimerService.updateDisplayTimesBySwitcher()).toBe(null)
  })
})
