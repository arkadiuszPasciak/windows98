import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./time.module.scss"
import { useTime } from "./use-time.hook"

export const Time: FunctionComponent = observer(() => {
	const { time } = useTime()

	return (
		time && (
			<span
				className={styles.time}
				data-testid="ma-clock-time"
			>
				{time}
			</span>
		)
	)
})