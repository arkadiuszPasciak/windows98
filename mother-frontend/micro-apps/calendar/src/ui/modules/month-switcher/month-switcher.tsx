import { DSSelect } from '@windows98/design-system'
import useMonthSwitcher from './use-month-switcher.hook'

const MonthSwitcher = () => {
  const {
    handleSelectChange,
    month,
    selectMonths
  } = useMonthSwitcher()

  return (
    <DSSelect
      id="month-switcher"
      modelValue={month}
      options={selectMonths}
      onSelect={handleSelectChange}
    />
  );
};

export default MonthSwitcher;