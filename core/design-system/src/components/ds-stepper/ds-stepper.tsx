import { DSText } from '../../index';
import { DSStepperProps } from './ds-stepper.type';
import './DSStepper.styles.scss';
import { useDSStepper } from './use-ds-stepper.hook';

export function DSStepper({
  id,
  modelValue,
  disabled = false,
  onIncrease,
  onDecrease,
  onValueChange
}: DSStepperProps) {
  const {
    value,
    handleIncrease,
    handleDecrease
  } = useDSStepper({modelValue, onIncrease, onDecrease, onValueChange})

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