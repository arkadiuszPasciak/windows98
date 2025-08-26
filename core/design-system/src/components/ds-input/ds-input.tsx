import { getClassNames } from "@windows98/toolkit"
import { DSLabel } from "../ds-label"
import styles from "./ds-input.module.css"
import type { DSInputProps } from "./ds-input.type"
import { useDSInput } from "./use-ds-input.hook"

export function DSInput({
	className = "",
	type = "text",
	id,
	disabled = false,
	readonly = false,
	initialValue = "",
	labelName,
	wrapperLayout = "vertical",
	min,
	max,
	onChange,
	placeholder = "",
}: DSInputProps) {
	const { value, handleInputChange } = useDSInput({ initialValue, onChange })

	const mainID = `${id}-input`
	const state = disabled ? "disabled" : "active"

	return (
		<div
			className={getClassNames([styles.wrapper, className])}
			data-testid={`${mainID}-wrapper`}
			data-wrapper={wrapperLayout}
			data-state={state}
		>
			{labelName && (
				<DSLabel
					id={mainID}
					text={labelName}
				/>
			)}

			<input
				id={mainID}
				data-testid={`${mainID}-input`}
				type={type}
				disabled={disabled}
				readOnly={readonly}
				value={value}
				min={min ?? undefined}
				max={max ?? undefined}
				name={mainID}
				onChange={handleInputChange}
				placeholder={placeholder}
			/>
		</div>
	)
}
