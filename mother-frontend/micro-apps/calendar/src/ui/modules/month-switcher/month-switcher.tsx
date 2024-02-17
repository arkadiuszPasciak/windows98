import { DSSelect } from '@windows98/design-system'
import useMonthSwitcher from './use-month-switcher.hook'

export function MonthSwitcher() {
  const { handleSelectChange, month, months } = useMonthSwitcher()

  return (
    <DSSelect
      id="month-switcher"
      modelValue={month}
      options={months}
      onSelect={handleSelectChange}
    />
  )
}
