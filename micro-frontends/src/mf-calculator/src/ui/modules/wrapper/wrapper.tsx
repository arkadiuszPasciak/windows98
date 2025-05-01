import type { FunctionComponent } from "react"
import { Keypad } from "../keypad"
import { Screen } from "../screen"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			className={styles.wrapper}
			data-testid="mf-calculator-wrapper"
		>
			<Screen />
			<Keypad />
		</div>
	)
}
