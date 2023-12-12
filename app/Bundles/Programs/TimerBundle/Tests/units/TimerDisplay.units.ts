import { expect, it, describe } from 'vitest'
import TimerDisplay from '@APP|Bundles/TimerBundle/Services/TimerDisplay.services'

const TimerDisplayService = new TimerDisplay()

describe('[TimerBundle]<Services>(showZeroBeforeSingleNumber)', () => {
  it('returns zero in string', async () => {
    expect(TimerDisplayService.showZeroBeforeSingleNumber(0)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(1)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(2)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(3)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(4)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(5)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(6)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(7)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(8)).toBe('0')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(9)).toBe('0')
  })

  it('returns empty in string', async () => {
    expect(TimerDisplayService.showZeroBeforeSingleNumber(10)).toBe('')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(20)).toBe('')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(30)).toBe('')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(40)).toBe('')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(50)).toBe('')
    expect(TimerDisplayService.showZeroBeforeSingleNumber(59)).toBe('')
  })
})
