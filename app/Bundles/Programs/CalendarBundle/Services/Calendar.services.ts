import { ICalendarDays } from '@APP|Bundles/CalendarBundle/Supports/Calendar.supports'

export class Calendar {
  private date: Date
  public year: number
  public month: number
  private firstDayMonth: number
  private lastDateMonth: number

  constructor(date: Date) {
    this.date = date
    this.year = this.date.getFullYear()
    this.month = this.date.getMonth()
    this.firstDayMonth = this.getFirstDayMonth()
    this.lastDateMonth = this.getLastDateMonth()
  }

  public generateDays(): Array<ICalendarDays> {
    const days = [] as Array<ICalendarDays>

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
        value: String(index),
      })
    }

    return days
  }

  private getFirstDayMonth(): number {
    return new Date(this.year, this.month, 1).getDay()
  }

  private getLastDateMonth(): number {
    return new Date(this.year, this.month + 1, 0).getDate()
  }
}
