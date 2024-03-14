import { useState, useEffect, type ChangeEvent } from "react"
import type { UseDSInputProps } from "./index"

export function useDSInput({initialValue, onChange}: UseDSInputProps) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue, setValue])

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value
		setValue(newValue)

		if (onChange) onChange(newValue)
	}

	return { value, handleInputChange }
}
