import { useEffect, useState } from "react"
import type { UseDSStepperProps } from "./ds-stepper.type"

export function useDSStepper({
	modelValue,
	onIncrease,
	onDecrease,
}: UseDSStepperProps) {
	const [value, setValue] = useState(modelValue)

	useEffect(() => {
		setValue(modelValue)
	}, [modelValue])

	const handleIncrease = (): void => {
		if (onIncrease) onIncrease()
	}

	const handleDecrease = (): void => {
		if (onDecrease) onDecrease()
	}

	return { value, handleIncrease, handleDecrease }
}
