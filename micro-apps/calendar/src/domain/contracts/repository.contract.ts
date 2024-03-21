import { Maybe } from "@windows98/toolkit/src/types"
import { ICalendarDays } from "../models/days.model"

export default interface CalendarRepositoryContract {
  year: Maybe<number>
  month: Maybe<number>
  days: Maybe<Array<ICalendarDays>>

  initCalendar(date: Date): void
  generateDays(): void
}
