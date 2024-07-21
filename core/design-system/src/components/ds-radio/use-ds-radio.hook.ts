import { State } from "@windows98/toolkit"
import { useEffect, useState } from "react"
import type { UseDSRadioProps } from "./ds-radio.type"

export function useDSRadio({
	initialValue,
	onChange,
	state,
}: UseDSRadioProps) {
	const [value, setValue] = useState<boolean>(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue, setValue])

	const handleChange = (): void => {
		const newValue: boolean = !value
		setValue(newValue)

		if (onChange) onChange(newValue)
	}

	const isDisabled: boolean = state === State.DISABLED

	return {
		isDisabled,
		handleChange,
		value,
	}
}
