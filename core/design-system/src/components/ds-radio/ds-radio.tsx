import { getClassNames } from "@windows98/toolkit"
import type { JSX } from "react"
import { DSText } from "../../index"
import { DSIconRadioSVG } from "../ds-icon/ds-icon-radio.svg"
import styles from "./ds-radio.module.css"
import type { DSRadioProps } from "./ds-radio.type"
import { useDSRadio } from "./use-ds-radio.hook"

export const DSRadio = ({
	className = "",
	initialChecked = false,
	disabled = false,
	id,
	onChange,
	name,
	text,
}: DSRadioProps): JSX.Element => {
	const { checked, handleChange } = useDSRadio({
		initialChecked,
		onChange,
	})

	const state = disabled ? "disabled" : "active"
	const mainId = `${id}-radio`

	return (
		<label
			aria-label={!text.visible ? text.content : undefined}
			className={getClassNames([styles.wrapper, className])}
			data-testid={`${mainId}-label`}
			data-state={state}
			htmlFor={mainId}
		>
			<input
				className={getClassNames([styles.input])}
				checked={checked}
				data-testid={`${mainId}-input`}
				disabled={disabled}
				name={name}
				type="radio"
				value={id}
				onChange={handleChange}
				id={mainId}
			/>

			<span
				className={getClassNames([styles.icon])}
				data-testid={`${mainId}-icon`}
			>
				<DSIconRadioSVG isChecked={checked} />
			</span>

			{text.visible && (
				<DSText
					className={getClassNames([styles.text])}
					id={mainId}
					text={text.content}
				/>
			)}
		</label>
	)
}
