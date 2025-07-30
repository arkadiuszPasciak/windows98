import { getClassNames } from "@windows98/toolkit"
import { DSIconSelectButton } from "../ds-icon/ds-icon-select-button.svg"
import styles from "./ds-select.module.css"
import type { DSSelectProps } from "./ds-select.type"
import useDSSelect from "./use-ds-select.hook"

export function DSSelect({
	className = "",
	id,
	required = false,
	disabled = false,
	modelValue,
	options,
	labelName,
	onSelect,
	wrapperLayout = "vertical",
}: DSSelectProps) {
	const { value, handleChange } = useDSSelect(modelValue)

	const handleOptionValue = (
		value: React.ChangeEvent<HTMLSelectElement>,
	): void => {
		handleChange(value)
		onSelect(value)
	}

	const state = disabled ? "disabled" : "enabled"
	const mainId = `${id}-select`

	return (
		<div
			className={getClassNames([styles.wrapper, className])}
			data-state={state}
			data-wrapper={wrapperLayout}
		>
			{labelName && (
				<label
					data-testid={`${mainId}-label`}
					htmlFor={id}
				>
					{labelName}
				</label>
			)}
			<select
				data-testid={`${mainId}-select`}
				disabled={disabled}
				id={id}
				name={id}
				onChange={handleOptionValue}
				required={required}
				value={value}
			>
				{options.map((option, idOption) => (
					<option
						className={styles.option}
						data-testid={`${mainId}-option-${idOption}`}
						key={`${id}-${option.value}`}
						value={option.value}
					>
						{option.name}
					</option>
				))}
			</select>
			<span
				className={styles.arrow}
				data-wrapper={wrapperLayout}
			>
				<DSIconSelectButton />
			</span>
		</div>
	)
}
