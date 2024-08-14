import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./screen.module.scss"
import { useScreen } from "./use-screen.hook"

export const Screen: FunctionComponent = observer(() => {
	const { hours, minutes, seconds } = useScreen()

	return (
		<div
			className={styles.screen}
			data-testid="ma-timer-screen"
		>
			<span
				className={styles.time}
				data-testid="ma-timer-screen-hours"
			>
				{hours}
			</span>

			<span>:</span>

			<span
				className={styles.time}
				data-testid="ma-timer-screen-minutes"
			>
				{minutes}
			</span>

			<span>:</span>

			<span
				className={styles.time}
				data-testid="ma-timer-screen-seconds"
			>
				{seconds}
			</span>
		</div>
	)
})
