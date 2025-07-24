import type { FunctionComponent } from "react"
import { Cancel } from "./cancel/cancel"
import styles from "./controller.module.css"
import { Ok } from "./ok/ok"

export const Controller: FunctionComponent = () => {
	return (
		<div
			className={styles.controller}
			data-testid="mf-shutdown-controller"
		>
			<Ok />
			<Cancel />
		</div>
	)
}
