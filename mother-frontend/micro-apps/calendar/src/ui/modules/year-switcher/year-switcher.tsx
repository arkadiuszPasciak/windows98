import { observer } from 'mobx-react-lite'
import { DSStepper } from '@windows98/design-system';

export const YearSwitcher = observer(() => {
  	return (
		<DSStepper
			id="calendar-year"
			modelValue={1900}
			onIncrease={() => {}}
			onDecrease={() => {}}
		/>
	)
})
