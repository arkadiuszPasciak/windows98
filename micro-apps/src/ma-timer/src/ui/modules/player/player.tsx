import type { FunctionComponent } from "react"
import styles from "./player.module.scss"
import { StartAndStop } from './start-and-stop/start-and-stop'
import { Reset } from './reset/reset'

export const Player: FunctionComponent = () => {
	return (
		<div
			className={styles.player}
			data-testid="ma-timer-player"
		>
			<StartAndStop />
			<Reset />
		</div>
	)
}
