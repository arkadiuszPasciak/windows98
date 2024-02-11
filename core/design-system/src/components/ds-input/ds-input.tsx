import { ChangeEvent, useState } from 'react';
import styles from './ds-input.module.scss';
import type { DSInputProps } from './ds-input.type';

export function DSInput({
  type = 'text',
  id,
  disabled = false,
  readonly = false,
  modelValue,
  labelName,
  labelPosition = 'top',
  min,
  max,
  onChange,
}: DSInputProps) {
  const [value, setValue] = useState(modelValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  }

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
        min={min}
        max={max}
        name={id}
        onChange={handleInputChange}
      />
    </div>
  );
}
