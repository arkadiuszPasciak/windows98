import { getClassNames } from "@windows98/toolkit"
import { DSInput } from "../../index"
import { DSButtonArrow } from "../../index"
import styles from "./ds-stepper.module.css"
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

	const state = disabled ? "disabled" : "enabled"

	return (
		<div
			className={getClassNames([styles["ds-stepper"], className])}
			data-state={state}
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
