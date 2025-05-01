import type { FunctionComponent } from "react"
import styles from "./player.module.scss"
import { Reset } from "./reset/reset"
import { StartAndStop } from "./start-and-stop/start-and-stop"

export const Player: FunctionComponent = () => {
	return (
		<div
			className={styles.player}
			data-testid="mf-timer-player"
		>
			<StartAndStop />
			<Reset />
		</div>
	)
}
