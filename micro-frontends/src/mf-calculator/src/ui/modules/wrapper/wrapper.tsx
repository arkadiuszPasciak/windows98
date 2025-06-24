import type { FunctionComponent } from "react"
import { Keypad } from "../keypad"
import { Modal } from "../modal"
import { Screen } from "../screen"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	return (
		<Modal>
			<div
				className={styles.wrapper}
				data-testid="mf-calculator-wrapper"
			>
				<Screen />
				<Keypad />
			</div>
		</Modal>
	)
}
