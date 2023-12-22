import type { Maybe } from '@windows98/toolkit/src/types'
import type { ICalendarDays } from '../models/days.model'

export interface CalendarServiceContract {
  calendar: Maybe<Array<ICalendarDays>>
  year: Maybe<number>
  month: Maybe<number>

  generateCurrentCalendar(date: Date): void
  changeCalendarByYear(): void
  changeCalendarByMonth(month: number): void
  increaseYear(): void
  decreaseYear(): void
}
