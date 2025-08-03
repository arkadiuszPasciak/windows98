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

	const mainId = `${id}-textarea`
	const state = disabled ? "disabled" : "active"

	return (
		<div
			className={getClassNames([styles[`wrapper-${wrapperLayout}`], className])}
			data-testid={`${mainId}-wrapper`}
			data-wrapper={wrapperLayout}
			data-state={state}
		>
			{labelName && (
				<label
					className={getClassNames([styles.label])}
					data-testid={`${mainId}-label`}
					htmlFor={mainId}
				>
					{labelName}
				</label>
			)}

			<textarea
				id={mainId}
				className={getClassNames([styles.textarea])}
				data-testid={`${mainId}-textarea`}
				disabled={disabled}
				readOnly={readonly}
				value={value}
				minLength={min ?? undefined}
				maxLength={max ?? undefined}
				name={mainId}
				onChange={handleTextareaChange}
			/>
		</div>
	)
}
