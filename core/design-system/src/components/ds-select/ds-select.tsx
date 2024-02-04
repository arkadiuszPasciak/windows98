import useDSSelect from './use-ds-select.hook';
import { DSIcon } from '../../index'
import type { DSSelectProps } from './ds-select.type';
import styles from './ds-select.module.scss';

export function DSSelect({
  id,
  required = false,
  disabled = false,
  modelValue,
  options,
  labelName,
  labelPosition = 'top',
}: DSSelectProps) {
  const { value, handleChange } = useDSSelect(modelValue);
  const labelClass = labelName ? `label-position-${labelPosition}` : ''

  return (
    <div
      className={`${styles['DSSelect']} ${styles[labelClass]}`}
    >
      {labelName && (
        <label
          className={styles['label']}
          data-testid={`ds-select-label-${id}`}
          htmlFor={id}
        >
          {labelName}
        </label>
      )}
      <select
        className={styles['select']}
        data-testid={`ds-select-select-${id}`}
        disabled={disabled}
        id={id}
        name={id}
        onChange={handleChange}
        required={required}
        value={value}
      >
        {options.map((option, idOption) => (
          <option
            className={styles['option']}
            data-testid={`ds-select-option-${id}-${idOption}`}
            key={`${id}-${option.value}`}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
      <DSIcon name="select-button" />
    </div>
  );
};
