import { useState } from 'react'
import { DSStepper } from '../../src'

export function TestComponent(): JSX.Element {
	const [value, setValue] = useState(0)

	return (
		<DSStepper
			id="test"
			modelValue={value}
			onIncrease={() => setValue(value + 1)}
			onDecrease={() => setValue(value - 1)}
			onValueChange={() => {}}
		/>
  	)	
}
