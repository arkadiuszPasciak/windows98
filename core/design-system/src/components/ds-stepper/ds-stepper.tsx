import { DSInput } from "../../index"
import { DSButtonArrow } from "../../index"
import styles from "./ds-stepper.module.scss"
import type { DSStepperProps } from "./ds-stepper.type"
import { useDSStepper } from "./use-ds-stepper.hook"

export function DSStepper({
	className = "",
	id,
	modelValue,
	disabled = false,
	onIncrease,
	onDecrease,
}: DSStepperProps) {
	const { value, handleIncrease, handleDecrease } = useDSStepper({
		modelValue,
		onIncrease,
		onDecrease,
	})

	return (
		<div
			className={`
        ${styles["ds-stepper"]}
        ${disabled ? styles["state-disabled"] : ""}
        ${className}
      `}
		>
			<DSInput
				id={`stepper-${id}`}
				initialValue={value}
				readonly={true}
			/>

			<DSButtonArrow
				ariaLabel="Increase"
				direction="top"
				disabled={disabled}
				id={id}
				size="small"
				onClick={handleIncrease}
			/>

			<DSButtonArrow
				ariaLabel="Decrease"
				direction="bottom"
				disabled={disabled}
				id={id}
				size="small"
				onClick={handleDecrease}
			/>
		</div>
	)
}
