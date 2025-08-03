import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import { DSIconCheckboxSVG, DSText } from "../../index"
import styles from "./ds-checkbox.module.css"
import type { DSCheckboxProps } from "./ds-checkbox.type"
import { useDSCheckbox } from "./use-ds-checkbox.hook"

export const DSCheckbox: FunctionComponent<DSCheckboxProps> = ({
	className = "",
	initialChecked = false,
	disabled = false,
	id,
	name,
	onChange,
	readonly = false,
	text,
}) => {
	const { checked, handleChange } = useDSCheckbox({
		initialChecked,
		onChange,
	})

	return (
		<label
			htmlFor={`${id}-checkbox`}
			aria-label={text}
			className={getClassNames([styles.wrapper, className])}
			data-testid={`${id}-checkbox-label`}
		>
			<input
				className={styles.input}
				checked={checked}
				data-testid={`${id}-checkbox-input`}
				disabled={disabled}
				name={name}
				id={`${id}-checkbox`}
				type="checkbox"
				value={id}
				onChange={handleChange}
				readOnly={readonly}
			/>

			{checked && <DSIconCheckboxSVG />}

			{!checked && <DSIconCheckboxSVG />}

			<DSText
				className={styles.text}
				id={`${id}-checkbox`}
				text={text}
			/>
		</label>
	)
}
