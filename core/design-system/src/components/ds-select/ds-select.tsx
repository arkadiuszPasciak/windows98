import { useState, ChangeEvent } from 'react';
import type { DSSelectProps } from './ds-select.type';
import './UISelect.styles.scss';

export default function DSSelect({
  id,
  required = false,
  disabled = false,
  modelValue,
  options,
  labelName,
  labelPosition = 'top',
}: DSSelectProps) {
  const [value, setValue] = useState(modelValue);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={`UISelect ${labelName ? `label-position-${labelPosition}` : ''}`}>
      {labelName && (
        <label className="label" data-test={`ui-select-label-${id}`} htmlFor={id}>
          {labelName}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={handleChange}
        className="select"
        name={id}
        data-test={`ui-select-${id}`}
        disabled={disabled}
        required={required}
      >
        {options.map((option) => (
          <option key={`${id}-${option.value}`} value={option.value} className="option">
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};
