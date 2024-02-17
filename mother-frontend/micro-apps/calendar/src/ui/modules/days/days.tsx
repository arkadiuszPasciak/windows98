import { WeekDays } from './week-days/week-days'
import { MonthDays } from './month-days/month-days'

export function Days() {
  return (
    <div className="days">
      <WeekDays />
      <MonthDays />
    </div>
  )
}
