import type { FunctionComponent } from "react"
import { DSIconCheckboxSVG, DSText } from "../../index"
import styles from "./ds-checkbox.module.scss"
import type { DSCheckboxProps } from "./ds-checkbox.type"
import { useDSCheckbox } from "./use-ds-checkbox.hook"

export const DSCheckbox: FunctionComponent<DSCheckboxProps> = ({
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
			aria-label={text}
			className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}
			data-testid={`${id}-checkbox`}
		>
			<input
				className={styles.input}
				checked={checked}
				data-testid={`${id}-checkbox-input`}
				disabled={disabled}
				name={name}
				type="checkbox"
				value={id}
				onChange={handleChange}
				readOnly={readonly}
			/>

			{checked && <DSIconCheckboxSVG />}

			{!checked && <DSIconCheckboxSVG />}

			<DSText
				className={styles.text}
				id={id}
				text={text}
			/>
		</label>
	)
}
