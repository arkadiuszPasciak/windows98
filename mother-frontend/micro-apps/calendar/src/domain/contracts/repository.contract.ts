import { ICalendarDays } from '../models/days.model'

export default interface CalendarRepositoryContract {
  year: number
  month: number

  generateDays(): Array<ICalendarDays>
}
