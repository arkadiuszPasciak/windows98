import { observer } from 'mobx-react-lite'
import { DSStepper } from '@windows98/design-system';
import useYearSwitcher from './use-year-switcher.hook';

export const YearSwitcher = observer(() => {
	const { decreaseYear, increaseYear, year } = useYearSwitcher()

  	return (
		<DSStepper
			id="calendar-year"
			modelValue={year}
			onIncrease={increaseYear}
			onDecrease={decreaseYear}
		/>
	)
})
