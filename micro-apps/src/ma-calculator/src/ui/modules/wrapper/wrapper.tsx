import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"
import { Screen } from "../screen"
import { Keypad } from "../keypad"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			className={styles.wrapper}
			data-testid="ma-calculator-wrapper"
		>
			<Screen />
			<Keypad />
		</div>
	)
}
