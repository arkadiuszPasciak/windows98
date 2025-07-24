import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./screen.module.css"
import { useScreen } from "./use-screen.hook"

export const Screen: FunctionComponent = observer(() => {
	const { hours, minutes, seconds } = useScreen()

	return (
		<div
			className={styles.screen}
			data-testid="mf-timer-screen"
		>
			<span
				className={styles.time}
				data-testid="mf-timer-screen-hours"
			>
				{hours}
			</span>

			<span>:</span>

			<span
				className={styles.time}
				data-testid="mf-timer-screen-minutes"
			>
				{minutes}
			</span>

			<span>:</span>

			<span
				className={styles.time}
				data-testid="mf-timer-screen-seconds"
			>
				{seconds}
			</span>
		</div>
	)
})
