import type { FunctionComponent } from "react"
import { Controller } from "../controller"
import { Modal } from "../modal"
import { Player } from "../player"
import { Presets } from "../presets"
import { Screen } from "../screen"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	return (
		<Modal>
			<div
				className={styles.wrapper}
				data-testid="mf-timer-wrapper"
			>
				<Presets />
				<Controller />
				<Screen />
				<Player />
			</div>
		</Modal>
	)
}
