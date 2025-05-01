import { DSStepper } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./controller.module.scss"
import { useController } from "./use-controller.hook"

export const Controller: FunctionComponent = observer(() => {
	const {
		hours,
		minutes,
		seconds,
		increaseSeconds,
		decreaseSeconds,
		increaseMinutes,
		decreaseMinutes,
		increaseHours,
		decreaseHours,
		isDisabled,
	} = useController()

	return (
		<div
			data-testid="ma-timer-controller"
			className={styles.controller}
		>
			<DSStepper
				id="hours"
				modelValue={hours}
				onIncrease={increaseHours}
				onDecrease={decreaseHours}
				disabled={isDisabled}
			/>

			<DSStepper
				id="minutes"
				modelValue={minutes}
				onIncrease={increaseMinutes}
				onDecrease={decreaseMinutes}
				disabled={isDisabled}
			/>

			<DSStepper
				id="seconds"
				modelValue={seconds}
				onIncrease={increaseSeconds}
				onDecrease={decreaseSeconds}
				disabled={isDisabled}
			/>
		</div>
	)
})
