import type { Maybe } from "@windows98/toolkit"
import type { ICalendarDays } from "../models"

export interface CalendarRepositoryContract {
  year: Maybe<number>
  month: Maybe<number>
  days: Maybe<Array<ICalendarDays>>

  initCalendar(date: Date): void
  generateDays(): void
}
