import styles from "./ds-textarea.module.scss"
import type { DSTextareaProps } from "./ds-textarea.type"
import { useDSTextarea } from "./use-ds-textarea.hook"

export function DSTextarea({
	id,
	disabled = false,
	readonly = false,
	initialValue = "",
	labelName,
	wrapperLayout = "vertical",
	min,
	max,
	onChange,
}: DSTextareaProps) {
	const { value, handleTextareaChange } = useDSTextarea({
		initialValue,
		onChange,
	})

	return (
		<div
			className={styles[`wrapper-${wrapperLayout}`]}
			data-testid={`${id}-wrapper-textarea`}
		>
			{labelName && (
				<label
					className={styles.label}
					data-testid={`${id}-label`}
					htmlFor={id}
				>
					{labelName}
				</label>
			)}

			<textarea
				id={id}
				className={styles.textarea}
				data-testid={`${id}-textarea`}
				disabled={disabled}
				readOnly={readonly}
				value={value}
				minLength={min ?? undefined}
				maxLength={max ?? undefined}
				name={id}
				onChange={handleTextareaChange}
			/>
		</div>
	)
}
