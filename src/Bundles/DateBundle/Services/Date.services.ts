import { EMonths, TMonths } from '@Bundles/DateBundle/Supports/Date.supports'
import { Nullable } from 'vitest'

export function getMonthName(date: Date): Nullable<TMonths> {
  if (!date) {
    return null
  }

  const month = date.getMonth()

  if (!month && month !== 0) {
    return null
  }

  switch (month) {
    case 0:
      return EMonths.JANUARY
    case 1:
      return EMonths.FEBRUARY
    case 2:
      return EMonths.MARCH
    case 3:
      return EMonths.APRIL
    case 4:
      return EMonths.MAY
    case 5:
      return EMonths.JUNE
    case 6:
      return EMonths.JULY
    case 7:
      return EMonths.AUGUST
    case 8:
      return EMonths.SEPTEMBER
    case 9:
      return EMonths.OCTOBER
    case 10:
      return EMonths.NOVEMBER
    case 11:
      return EMonths.DECEMEBER
  }
}
