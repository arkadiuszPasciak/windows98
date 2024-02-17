import { DSFrame } from '@windows98/design-system'
import { useWrapper } from './use-wrapper.hook'
import { Days } from '../days/days'
import { MonthSwitcher } from '../month-switcher/month-switcher'
import { YearSwitcher } from '../year-switcher/year-switcher'
import styles from './wrapper.module.scss'

export function Wrapper() {
  const { title } = useWrapper()

  return (
    <DSFrame
      className={styles.wrapper}
      id="calculator"
      title={title}
    >
      <MonthSwitcher />
      <YearSwitcher />
      <Days />
    </DSFrame>
  )
}
