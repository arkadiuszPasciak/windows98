import { DSText } from "../../index"
import { DSIconRadioSVG } from "../ds-icon/ds-icon-radio.svg"
import styles from "./ds-radio.module.scss"
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

	return (
		<label
			aria-label={!text.visible ? text.content : undefined}
			className={`${styles.wrapper} ${disabled ? styles.disabled : ""} ${className}`}
			data-testid={`${id}-radio`}
		>
			<input
				className={styles.input}
				checked={checked}
				data-testid={`${id}-radio-input`}
				disabled={disabled}
				name={name}
				type="radio"
				value={id}
				onChange={handleChange}
			/>

			<span
				className={styles.icon}
				data-testid={`${id}-radio-icon`}
			>
				<DSIconRadioSVG isChecked={checked} />
			</span>

			{text.visible && (
				<DSText
					className={styles.text}
					id={id}
					text={text.content}
				/>
			)}
		</label>
	)
}
