import { observer } from 'mobx-react-lite'
import { DSFrame } from '@windows98/design-system'
import { useWrapper } from './use-wrapper.hook'
import { Days } from '../days/days'
import { MonthSwitcher } from '../month-switcher/month-switcher'
import { YearSwitcher } from '../year-switcher/year-switcher'
import styles from './wrapper.module.scss'
import { useSyncLang } from '../../hooks/use-sync-lang.hook'

export const Wrapper = observer(() => {
  const { title } = useWrapper()

  useSyncLang()

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
})
