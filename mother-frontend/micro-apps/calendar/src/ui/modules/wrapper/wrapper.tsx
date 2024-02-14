import { MonthSwitcher } from '../month-switcher/month-switcher'
import { YearSwitcher } from '../year-switcher/year-switcher'
import styles from './wrapper.module.scss'

// TODO
// 1. add component:
{/* <UIFrame class="CalendarWrapper" :title="translation.title"> -->
<Days />
</UIFrame> */}
// 2. init domain here
// import useWrapper from './use-wrapper.composable'
// const { initCalendar, translation } = useWrapper()
// initCalendar()

export function Wrapper() {
  return (
    <div className={styles.wrapper}>
      <MonthSwitcher />
      <YearSwitcher />
    </div>
  )
}
