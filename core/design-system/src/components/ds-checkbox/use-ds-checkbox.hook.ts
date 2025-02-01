import { useEffect, useState } from "react"
import type { useDSCheckboxProps } from "./ds-checkbox.type"

export const useDSCheckbox = ({
	initialChecked = false,
	onChange,
}: useDSCheckboxProps) => {
	const [checked, setChecked] = useState(initialChecked)

	const handleChange = () => {
		const newChecked = !checked
		setChecked(newChecked)
		if (onChange) {
			onChange(newChecked)
		}
	}

	useEffect(() => {
		setChecked(initialChecked)
	}, [initialChecked])

	return { checked, handleChange }
}
