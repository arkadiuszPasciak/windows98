import { expect, it, describe } from 'vitest'
import {
  isDotExist,
  isMathematicalSignLast,
  summingResult,
  isMathematicalOperation,
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

describe('[CalculatorBundle]<Services>(summingResult)', () => {
  it('should return false', () => {
    expect(summingResult('')).toBe('ERROR')

    expect(summingResult('abcde')).toBe('ERROR')

    expect(summingResult('!@^)("')).toBe('ERROR')
  })

  it('should return true', () => {
    expect(summingResult('1+2-5*8/2')).toBe('-17')
  })
})

describe('[CalculatorBundle]<Services>(isMathematicalOperation)', () => {
  it('should return false', () => {
    expect(isMathematicalOperation('')).toBe(false)

    expect(isMathematicalOperation('abcde')).toBe(false)

    expect(isMathematicalOperation('!@^)("')).toBe(false)
  })

  it('should return true', () => {
    expect(isMathematicalOperation('1+2-5*8/2')).toBe(true)
  })
})
