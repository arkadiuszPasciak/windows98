import { DSSelect } from '@windows98/design-system'
import useMonthSwitcher from './use-month-switcher.hook'

const MonthSwitcher = () => {
  const {
    // @TODO add handler in ds-select
    // changeCalendarByMonth,
    month,
    selectMonths
  } = useMonthSwitcher()

  return (
    <DSSelect
      id="month-switcher"
      modelValue={month}
      options={selectMonths}
    />
  );
};

export default MonthSwitcher;