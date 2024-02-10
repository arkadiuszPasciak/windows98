import { useState, useEffect } from 'react';
import type { UseDSStepperProps } from './ds-stepper.type';

export function useDSStepper({
	modelValue,
	onIncrease,
	onDecrease,
	onValueChange
}: UseDSStepperProps) {
	const [value, setValue] = useState(modelValue)

	useEffect(() => {
		setValue(modelValue)
	}, [modelValue])

	useEffect(() => {
		if (onValueChange) onValueChange(value)
	}, [value, onValueChange])

	const handleIncrease = (): void => {
		if (onIncrease) onIncrease()
	}

	const handleDecrease = (): void => {
		if (onDecrease) onDecrease()
	}

	return { value, handleIncrease, handleDecrease }
}
