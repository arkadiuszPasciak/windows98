import { EMonths, TMonths } from '@Bundles/DateBundle/Supports/Date.supports'
import { Nullable } from 'vitest'

export class Calendar {
  private date: Date
  private year: number
  private month: number
  private firstDayMonth: number
  private lastDateMonth: number

  constructor(date: Date) {
    this.date = date
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.firstDayMonth = this.getFirstDayMonth()
    this.lastDateMonth = this.getLastDateMonth()
  }

  private getFirstDayMonth(): number {
    return new Date(this.year, this.year, 1).getDay()
  }

  private getLastDateMonth(): number {
    return new Date(this.year, this.month + 1, 0).getDate()
  }

  public generateDays(): any {
    const days = []

    for (let index = this.firstDayMonth; index > 0; index--) {
      days.push({
        status: 'inactive',
        value: '',
      })
    }

    for (let index = 1; index <= this.lastDateMonth; index++) {
      const isToday =
        index === this.date.getDate() &&
        this.month === new Date().getMonth() &&
        this.year === new Date().getFullYear()

      days.push({
        status: isToday ? 'active' : 'normal',
        value: index,
      })
    }

    return days
  }
}

export const currentCalendar = new Calendar(new Date())

export const generateCalendar = (date: Date) => {
  return new Calendar(date)
}

export function getFullYear(date: Date): Nullable<number> {
  if (!date) {
    return null
  }

  const year = date.getFullYear()

  if (!year) {
    return null
  }

  return year
}

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
