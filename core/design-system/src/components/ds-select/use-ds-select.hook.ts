import { useState, ChangeEvent } from "react"
import type { DSSelectProps } from "./ds-select.type"

export default function useDSSelect(modelValue: DSSelectProps["modelValue"]) {
	const [value, setValue] = useState<DSSelectProps["modelValue"]>(modelValue)

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setValue(event.target.value)
	}

	return {
		value,
		handleChange,
	}
}
