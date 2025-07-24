import type { FunctionComponent } from "react"
import { Time } from "../time"
import styles from "./wrapper.module.css"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			className={styles.wrapper}
			data-testid="mf-clock-wrapper"
		>
			<Time />
		</div>
	)
}
