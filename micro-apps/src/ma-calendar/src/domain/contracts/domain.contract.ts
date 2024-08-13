import type { Maybe } from "@windows98/toolkit"
import type { ICalendarDays } from "../models"

export interface CalendarDomainContract {
  calendar: Maybe<Array<ICalendarDays>>
  year: Maybe<number>
  month: Maybe<number>

  generateCalendar(date?: Date): void
  changeCalendarByYear(): void
  changeCalendarByMonth(month: number): void
  increaseYear(): void
  decreaseYear(): void
}
