import { type ChangeEvent, useEffect, useState } from "react"
import type { UseDSInputProps } from "./index"

export function useDSInput({ initialValue, onChange }: UseDSInputProps) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)

		if (onChange) onChange(event)
	}

	return { value, handleInputChange }
}
