import { type ChangeEvent, useEffect, useState } from "react"
import type { UseDSTextareaProps } from "./ds-textarea.type"

export function useDSTextarea({ initialValue, onChange }: UseDSTextareaProps) {
	const [value, setValue] = useState(initialValue)

	useEffect(() => {
		setValue(initialValue)
	}, [initialValue])

	const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value
		setValue(newValue)

		if (onChange) onChange(newValue)
	}

	return { value, handleTextareaChange }
}
