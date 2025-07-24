import { DSFrame } from "@windows98/design-system"
import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import styles from "./player-sign.module.css"
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
			className={getClassNames([styles.frame])}
			id={`mf-tic-tac-toe-game-player-sign-${playerType}`}
			title={name}
		>
			<span
				className={getClassNames([styles.sign, styles[`sign-${signType}`]])}
			>
				{signType}
			</span>
		</DSFrame>
	)
}
