import { getClassNames } from "@windows98/toolkit"
import styles from "./ds-textarea.module.css"
import type { DSTextareaProps } from "./ds-textarea.type"
import { useDSTextarea } from "./use-ds-textarea.hook"

export function DSTextarea({
	className = "",
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
			className={getClassNames([styles[`wrapper-${wrapperLayout}`], className])}
			data-testid={`${id}-wrapper-textarea`}
		>
			{labelName && (
				<label
					className={getClassNames([styles.label])}
					data-testid={`${id}-label`}
					htmlFor={id}
				>
					{labelName}
				</label>
			)}

			<textarea
				id={id}
				className={getClassNames([styles.textarea])}
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
