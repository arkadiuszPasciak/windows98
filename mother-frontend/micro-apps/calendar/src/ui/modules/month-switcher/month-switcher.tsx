import { observer } from 'mobx-react-lite'
import { DSSelect } from '@windows98/design-system'
import useMonthSwitcher from './use-month-switcher.hook'

export const MonthSwitcher = observer(() =>  {
  const { handleSelectChange, month, months } = useMonthSwitcher()

  return month !== null && (
    <DSSelect
      id="month-switcher"
      modelValue={month}
      options={months}
      onSelect={handleSelectChange}
    />
  )
})
