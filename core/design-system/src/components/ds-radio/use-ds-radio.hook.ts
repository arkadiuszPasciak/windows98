import { useEffect, useState } from "react"
import { UseDSRadioProps } from "./ds-radio.type"

export function useDSRadio({ initialChecked, onChange }: UseDSRadioProps) {
	const [checked, setChecked] = useState<boolean>(initialChecked)

	useEffect(() => {
		setChecked(initialChecked)
	}, [initialChecked])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (onChange) {
			onChange()
		}

		setChecked(event.target.checked)
	}

	return {
		checked,
		handleChange,
	}
}
