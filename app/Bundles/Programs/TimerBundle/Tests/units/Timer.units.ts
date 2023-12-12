import { expect, it, describe } from 'vitest'
import Timer from '@APP|Bundles/TimerBundle/Services/Timer.services'
import { ETimerPresetsRadioCheck } from '@APP|Bundles/TimerBundle/Supports/TimerPresets.supports'
import { ETimerSwitcherMethod } from '@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports'

const TimerService = new Timer()

describe('[TimerBundle]<Services>(decreaseHoursInTimer)', () => {
  it('increases hours when hour is upper than or equal 1', () => {
    expect(TimerService.decreaseHoursInTimer(1, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(2, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(3, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(4, 0, 0)).toBe(true)
    expect(TimerService.decreaseHoursInTimer(5, 0, 0)).toBe(true)
  })

  it('doesn`t increase hours when hour is equal or lower 0', () => {
    expect(TimerService.decreaseHoursInTimer(0, 0, 1)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 1, 2)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 2, 3)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 3, 4)).toBe(false)
    expect(TimerService.decreaseHoursInTimer(0, 0, 0)).toBe(false)
  })
})

describe('[TimerBundle]<Services>(decreaseMinutesInTimer)', () => {
  it('increases minutes when minutes is upper than or equal 1', () => {
    expect(TimerService.decreaseMinutesInTimer(1, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(2, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(3, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(4, 0)).toBe(true)
    expect(TimerService.decreaseMinutesInTimer(5, 0)).toBe(true)
  })

  it('doesn`t increase hours when minutes is equal 0', () => {
    expect(TimerService.decreaseMinutesInTimer(0, 1)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 2)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 3)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 4)).toBe(false)
    expect(TimerService.decreaseMinutesInTimer(0, 0)).toBe(false)
  })
})

describe('[TimerBundle]<Services>(updateDisplayTimesBySwitcher)', () => {
  it('should return 3', () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.THREE_MINUTES,
      ),
    ).toBe(3)
  })

  it('should return 5', () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.FIVE_MINUTES,
      ),
    ).toBe(5)
  })

  it('should return 10', () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.TEN_MINUTES,
      ),
    ).toBe(10)
  })

  it('should return 15', () => {
    expect(
      TimerService.updateDisplayTimesBySwitcher(
        ETimerPresetsRadioCheck.FIFTEEN_MINUTES,
      ),
    ).toBe(15)
  })

  it('should return null', () => {
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

describe('[TimerBundle]<Services>(isTimerZero)', () => {
  it('returns true when all parameters are equal 0', () => {
    expect(TimerService.isTimerZero(0, 0, 0)).toBe(true)
  })

  it('returns false when any time is upper than 0', () => {
    expect(TimerService.isTimerZero(0, 0, 1)).toBe(false)
    expect(TimerService.isTimerZero(0, 1, 2)).toBe(false)
    expect(TimerService.isTimerZero(1, 2, 3)).toBe(false)
    expect(TimerService.isTimerZero(0, 3, 0)).toBe(false)
    expect(TimerService.isTimerZero(1, 0, 0)).toBe(false)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(TimerService.isTimerZero()).toBe(false)
  })
})

describe('[TimerBundle]<Services>(verifySwitcherTime)', () => {
  it('returns false when time is equal 59 and method is increase', () => {
    expect(
      TimerService.verifySwitcherTime(59, ETimerSwitcherMethod.INCREASE),
    ).toBe(false)
  })

  it('returns false when time is equal 0 and method is decrease', () => {
    expect(
      TimerService.verifySwitcherTime(0, ETimerSwitcherMethod.DECREASE),
    ).toBe(false)
  })

  it('returns true when conditions are not true', () => {
    expect(
      TimerService.verifySwitcherTime(1, ETimerSwitcherMethod.DECREASE),
    ).toBe(true)
    expect(
      TimerService.verifySwitcherTime(5, ETimerSwitcherMethod.DECREASE),
    ).toBe(true)
    expect(
      TimerService.verifySwitcherTime(10, ETimerSwitcherMethod.DECREASE),
    ).toBe(true)
    expect(
      TimerService.verifySwitcherTime(1, ETimerSwitcherMethod.INCREASE),
    ).toBe(true)
    expect(
      TimerService.verifySwitcherTime(5, ETimerSwitcherMethod.INCREASE),
    ).toBe(true)
    expect(
      TimerService.verifySwitcherTime(10, ETimerSwitcherMethod.INCREASE),
    ).toBe(true)
  })
})
