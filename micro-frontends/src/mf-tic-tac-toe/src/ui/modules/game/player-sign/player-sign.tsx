import { DSFrame } from "@windows98/design-system"
import type { FunctionComponent } from "react"
import styles from "./player-sign.module.scss"
import type { PlayerSignProps } from "./player-sign.type"
import { usePlayerSign } from "./use-player-sign.hook"

export const PlayerSign: FunctionComponent<PlayerSignProps> = ({
	signType,
	playerType,
	playerName = "",
}) => {
	const { name } = usePlayerSign({ playerType, playerName })

	return (
		<DSFrame
			className={styles.frame}
			id={`mf-tic-tac-toe-game-player-sign-${playerType}`}
			title={name}
		>
			<span className={`${styles.sign} ${styles[`variant-${playerType}`]}`}>
				{signType}
			</span>
		</DSFrame>
	)
}
