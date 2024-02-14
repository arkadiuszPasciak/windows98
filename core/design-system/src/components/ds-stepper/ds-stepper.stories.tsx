import { useState } from 'react'
import { DSStepper } from './index'

export function DSStepperStories(): JSX.Element {
	const [value, setValue] = useState<number>(0)

	return (
		<DSStepper
			id="stepper"
			modelValue={value}
			onIncrease={() => setValue(value + 1)}
			onDecrease={() => setValue(value - 1)}
		/>
  	)
}
