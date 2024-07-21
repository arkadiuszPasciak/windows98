import styles from "./ds-radio.module.scss"
import { DSText } from "../../index"
import { useDSRadio } from './use-ds-radio.hook'
import type { DSRadioProps } from './ds-radio.type'
import { DSIconRadioSVG } from '../ds-icon/icons/ds-icon-radio.svg'

export const DSRadio = (
	{
		id,
		name,
		state,
		initialValue,
		text,
		onChange,
	}: DSRadioProps
): JSX.Element => {
	const {
		handleChange,
		value,
		isDisabled,
	} = useDSRadio({
		initialValue,
		onChange,
		state,
	})

	return (
		<label
			aria-label={!text.visible ? text.content : undefined}
			className={`${styles.wrapper} ${isDisabled ? styles.disabled : ''}`}
			data-testid={`${id}-radio`}
		>
			<input
				className={styles.input}
				checked={value}
				data-testid={`${id}-radio-input`}
				disabled={isDisabled}
				name={name}
				onChange={handleChange}
				type="radio"
				value={name}
			/>

			<span
				className={styles.icon}
				data-testid={`${id}-radio-icon`}
			>
				{value && (
					<DSIconRadioSVG />
				)}

				{!value && (
					<DSIconRadioSVG />
				)}
			</span>

			{
				text.visible && (
					<DSText
						className={styles.text}
						id={id}
						text={text.content}
					/>
				)
			}
		</label >
	)
}
