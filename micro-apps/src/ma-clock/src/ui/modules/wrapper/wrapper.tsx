import type { FunctionComponent } from "react"
import { Time } from "../time"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			className={styles.wrapper}
			data-testid="ma-clock-wrapper"
		>
			<Time />
		</div>
	)
}
