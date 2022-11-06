import { expect, it, describe } from 'vitest'
import { isDotExist } from '@Bundles/CalculatorBundle/Services/Calculator.services'

describe('[CalculatorBundle]<Services>(isDotExist)', () => {
  it('should return false', () => {
    expect(isDotExist('')).toBe(false)

    expect(isDotExist('12345')).toBe(false)
  })

  it('should return true', () => {
    expect(isDotExist('123.45')).toBe(true)
  })
})
