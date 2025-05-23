import { DSIconSelectButton } from "../ds-icon/ds-icon-select-button.svg"
import styles from "./ds-select.module.scss"
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

	return (
		<div
			className={`${styles.wrapper} ${styles[`wrapper-${wrapperLayout}`]} ${className}`}
		>
			{labelName && (
				<label
					className={styles.label}
					data-testid={`ds-select-label-${id}`}
					htmlFor={id}
				>
					{labelName}
				</label>
			)}
			<select
				className={styles.select}
				data-testid={`ds-select-select-${id}`}
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
						data-testid={`ds-select-option-${id}-${idOption}`}
						key={`${id}-${option.value}`}
						value={option.value}
					>
						{option.name}
					</option>
				))}
			</select>
			<span className={`${styles[`arrow-${wrapperLayout}`]} ${styles.arrow}`}>
				<DSIconSelectButton />
			</span>
		</div>
	)
}
