import styles from './ds-input.module.scss';
import type { DSInputProps } from './ds-input.type';
import { useDSInput } from './use-ds-input.hook';

export function DSInput({
  type = 'text',
  id,
  disabled = false,
  readonly = false,
  initialValue = '',
  labelName,
  labelPosition = 'top',
  min,
  max,
  onChange,
}: DSInputProps) {
    const { value, handleInputChange } = useDSInput({initialValue, onChange});

	return (
		<div className={`${styles['UIInput']} ${labelName ? `label-position-${labelPosition}` : ''}`}>
			{labelName && (
				<label
				className={styles['label']}
				data-testid={`ui-input-label-${id}`}
				htmlFor={id}
				>
				{labelName}
				</label>
			)}
			
			<input
				id={id}
				className={styles['input']}
				data-testid={`ui-input-${id}`}
				type={type}
				disabled={disabled}
				readOnly={readonly}
				value={value}
				min={min ?? undefined}
				max={max ?? undefined}
				name={id}
				onChange={handleInputChange}
			/>
		</div>
	);
}
