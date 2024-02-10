import { DSText } from '../../index';
import { DSStepperProps } from './ds-stepper.type';
import styles from './ds-stepper.module.scss';
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
    <div className={`${styles['ds-stepper']} ${disabled ? styles['state-disabled'] : ''}`}>
	    <DSText text={String(value)} id={id} />

      <button
        className={`${styles['button']} ${styles['button-increase']}`}
        disabled={disabled}
        data-testid={`${id}-increase`}
        onClick={handleIncrease}
      />

      <button
        className={`${styles['button']} ${styles['button-decrease']}`}
        disabled={disabled}
        data-testid={`${id}-decrease`}
        onClick={handleDecrease}
      />
    </div>
  )
}
