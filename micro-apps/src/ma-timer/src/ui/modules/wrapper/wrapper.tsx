import { Controller } from '../controller'
import { Player } from '../player'
import { Presets } from '../presets'
import { Screen } from "../screen"
import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"

export const Wrapper: FunctionComponent = () => {
	return (
		<div
			className={styles.wrapper}
			data-testid="ma-timer-wrapper"
		>
			<Presets />
			<Controller />
			<Screen />
			<Player />
		</div>
	)
}
