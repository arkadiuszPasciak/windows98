import { useState, type ChangeEvent } from 'react';
import type { UseDSInputProps } from './index';

export function useDSInput({initialValue, onChange}: UseDSInputProps) {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  }

  return { value, handleInputChange };
}
