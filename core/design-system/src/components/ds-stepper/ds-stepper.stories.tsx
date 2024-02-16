import { useState } from 'react'
import { DSStepper } from './index'

export function DSStepperStories(): JSX.Element {
	const [value, setValue] = useState<number>(0)

	const increaseValue = (): void => setValue(value + 1)
	const decreaseValue = (): void => setValue(value - 1)

	return (
		<DSStepper
			id="id"
			modelValue={value}
			onIncrease={increaseValue}
			onDecrease={decreaseValue}
		/>
  	)
}
