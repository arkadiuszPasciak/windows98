import styles from './ds-input.module.scss';
import type { DSInputProps } from './ds-input.type';
import { useDSInput } from './use-ds-input.hook';

export function DSInput({
  className = '',
  type = 'text',
  id,
  disabled = false,
  readonly = false,
  initialValue = '',
  labelName,
  wrapperLayout = 'vertical',
  min,
  max,
  onChange,
}: DSInputProps) {
    const { value, handleInputChange } = useDSInput({initialValue, onChange});

	const mainID = `ds-input-${id}`;

	return (
		<div
			className={`${styles[`wrapper-${wrapperLayout}`]} ${className}`}
			data-testid={mainID}
		>
			{labelName && (
				<label
					className={styles['label']}
					data-testid={`ds-input-label-${id}`}
					htmlFor={mainID}
				>
					{labelName}
				</label>
			)}

			<input
				id={mainID}
				className={styles['input']}
				data-testid={`ds-input-input-${id}`}
				type={type}
				disabled={disabled}
				readOnly={readonly}
				value={value}
				min={min ?? undefined}
				max={max ?? undefined}
				name={mainID}
				onChange={handleInputChange}
			/>
		</div>
	);
}
