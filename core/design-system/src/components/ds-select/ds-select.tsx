import useDSSelect from './use-ds-select.hook';
import type { DSSelectProps } from './ds-select.type';
import styles from './DSSelect.module.scss';

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
    <div className={`${styles['DSSelect']} ${styles[labelClass]}`}>
      {labelName && (
        <label className={styles['label']} data-test={`ui-select-label-${id}`} htmlFor={id}>
          {labelName}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className={styles['select']}
        name={id}
        data-test={`ui-select-${id}`}
        disabled={disabled}
        required={required}
      >
        {options.map((option) => (
          <option key={`${id}-${option.value}`} value={option.value} className={styles['option']}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
