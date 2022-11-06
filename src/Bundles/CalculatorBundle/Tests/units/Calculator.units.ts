import { expect, it, describe } from 'vitest'
import {
  isDotExist,
  isMathematicalSignLast,
} from '@Bundles/CalculatorBundle/Services/Calculator.services'

describe('[CalculatorBundle]<Services>(isDotExist)', () => {
  it('should return false', () => {
    expect(isDotExist('')).toBe(false)

    expect(isDotExist('12345')).toBe(false)
  })

  it('should return true', () => {
    expect(isDotExist('123.45')).toBe(true)
  })
})

describe('[CalculatorBundle]<Services>(isMathematicalSignLast)', () => {
  it('should return false', () => {
    expect(isMathematicalSignLast('')).toBe(false)

    expect(isMathematicalSignLast('1234$')).toBe(false)
  })

  it('should return true', () => {
    expect(isMathematicalSignLast('1234+')).toBe(true)

    expect(isMathematicalSignLast('1234/')).toBe(true)

    expect(isMathematicalSignLast('1234-')).toBe(true)

    expect(isMathematicalSignLast('1234*')).toBe(true)
  })
})
