import { DSStepper } from '@windows98/design-system';

export function YearSwitcher() {
  	return (
		<DSStepper
			id="calendar-year"
			modelValue={1900}
			onIncrease={() => {}}
			onDecrease={() => {}}
		/>
	)
}
