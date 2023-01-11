import { expect, it, describe } from 'vitest'
import {
  getFullYear,
  getMonthName,
} from '@Bundles/DateBundle/Services/Date.services'
import { EMonths } from '@Bundles/DateBundle/Supports/Date.supports'

describe('[DateBundle]<Services>(getFullYear)', () => {
  it('should return 1874', () => {
    const year = new Date(1874, 1)

    expect(getFullYear(year)).toBe(1874)
  })

  it('should return 1994', () => {
    const year = new Date(1994, 1)

    expect(getFullYear(year)).toBe(1994)
  })

  it('should return 2000', () => {
    const year = new Date(2000, 1)

    expect(getFullYear(year)).toBe(2000)
  })
})

describe('[DateBundle]<Services>(getMonthName)', () => {
  it('should return jan', () => {
    const january = new Date(2022, 0)

    expect(getMonthName(january)).toBe(EMonths.JANUARY)
  })

  it('should return feb', () => {
    const february = new Date(2022, 1)

    expect(getMonthName(february)).toBe(EMonths.FEBRUARY)
  })

  it('should return mar', () => {
    const march = new Date(2022, 2)

    expect(getMonthName(march)).toBe(EMonths.MARCH)
  })

  it('should return apr', () => {
    const april = new Date(2022, 3)

    expect(getMonthName(april)).toBe(EMonths.APRIL)
  })

  it('should return may', () => {
    const may = new Date(2022, 4)

    expect(getMonthName(may)).toBe(EMonths.MAY)
  })

  it('should return jun', () => {
    const jun = new Date(2022, 5)

    expect(getMonthName(jun)).toBe(EMonths.JUNE)
  })

  it('should return jul', () => {
    const jul = new Date(2022, 6)

    expect(getMonthName(jul)).toBe(EMonths.JULY)
  })

  it('should return aug', () => {
    const aug = new Date(2022, 7)

    expect(getMonthName(aug)).toBe(EMonths.AUGUST)
  })

  it('should return sep', () => {
    const sep = new Date(2022, 8)

    expect(getMonthName(sep)).toBe(EMonths.SEPTEMBER)
  })

  it('should return oct', () => {
    const oct = new Date(2022, 9)

    expect(getMonthName(oct)).toBe(EMonths.OCTOBER)
  })

  it('should return nov', () => {
    const nov = new Date(2022, 10)

    expect(getMonthName(nov)).toBe(EMonths.NOVEMBER)
  })

  it('should return dec', () => {
    const dec = new Date(2022, 11)

    expect(getMonthName(dec)).toBe(EMonths.DECEMEBER)
  })
})
