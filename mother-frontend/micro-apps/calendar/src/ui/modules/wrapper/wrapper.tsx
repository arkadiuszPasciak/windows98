import { DSFrame } from '@windows98/design-system'
import { MonthSwitcher } from '../month-switcher/month-switcher'
import { YearSwitcher } from '../year-switcher/year-switcher'
import styles from './wrapper.module.scss'

// TODO
// 2. init domain here
// import useWrapper from './use-wrapper.composable'
// const { initCalendar, translation } = useWrapper()
// initCalendar()

export function Wrapper() {
  return (
    <DSFrame
      className={styles.wrapper}
      id="calculator"
      title="translation.title"
    >
      <MonthSwitcher />
      <YearSwitcher />
    </DSFrame>
  )
}
