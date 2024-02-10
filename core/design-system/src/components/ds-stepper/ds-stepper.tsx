import { useState, useEffect } from 'react';
import { DSText } from '../../index';
import { DSStepperProps } from './ds-stepper.type';
import './DSStepper.styles.scss';

export function DSStepper({
  id,
  modelValue,
  disabled = false,
  onIncrease,
  onDecrease,
  onValueChange
}: DSStepperProps) {
  const [value, setValue] = useState(modelValue);

  useEffect(() => {
    setValue(modelValue);
  }, [modelValue]);

  const handleIncrease = () => {
    if (onIncrease) {
      onIncrease();
    }
  };

  const handleDecrease = () => {
    if (onDecrease) {
      onDecrease();
    }
  };

  useEffect(() => {
    if (onValueChange) {
      onValueChange(value);
    }
  }, [value, onValueChange]);

  return (
    <div className={`DSStepper ${disabled ? 'is-disabled' : ''}`}>
	  <DSText text={String(value)} id={id} />

      <button
        className="button increase"
        disabled={disabled}
        data-test={`${id}-increase`}
        onClick={handleIncrease}
      />

      <button
        className="button decrease"
        disabled={disabled}
        data-test={`${id}-decrease`}
        onClick={handleDecrease}
      />
    </div>
  );
};

export default DSStepper;