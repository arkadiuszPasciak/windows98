import MonthSwitcher from '../month-switcher/month-switcher'
import styles from './wrapper.module.scss'

// TODO
// 1. add component:
{/* <UIFrame class="CalendarWrapper" :title="translation.title"> -->
<MonthSwitcher />
<YearSwitcher />
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
    </div>
  )
}
