import { WeekDays } from './week-days/week-days'
import { MonthDays } from './month-days/month-days'
import styles from './days.module.scss'

export function Days() {
  return (
    <div className={styles['days']}>
      <WeekDays />
      <MonthDays />
    </div>
  )
}
