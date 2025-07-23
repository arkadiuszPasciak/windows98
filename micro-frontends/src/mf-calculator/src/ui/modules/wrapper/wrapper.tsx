import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import { Keypad } from "../keypad"
import { Modal } from "../modal"
import { Screen } from "../screen"
import styles from "./wrapper.module.css"

export const Wrapper: FunctionComponent = () => {
	return (
		<Modal>
			<div
				className={getClassNames([styles.wrapper])}
				data-testid="mf-calculator-wrapper"
			>
				<Screen />
				<Keypad />
			</div>
		</Modal>
	)
}
