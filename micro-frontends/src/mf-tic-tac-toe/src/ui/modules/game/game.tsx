import type { FunctionComponent } from "react"
import { Board } from "./board"
import styles from "./game.module.css"
import type { GameProps } from "./game.type"
import { PlayerSign, PlayerSignType } from "./player-sign"
import { ResultModal } from "./result-modal/result-modal"
import { useGame } from "./use-game.hook"

export const Game: FunctionComponent<GameProps> = ({ onRestartGame }) => {
	const { computerData, humanData } = useGame()

	return (
		<div
			className={styles["game-wrapper"]}
			data-testid="mf-tic-tac-toe-game"
		>
			<PlayerSign
				signType={humanData.sign}
				playerType={PlayerSignType.HUMAN}
				playerName={humanData.name}
			/>
			<PlayerSign
				signType={computerData.sign}
				playerType={PlayerSignType.COMPUTER}
			/>
			<Board />
			<ResultModal onRestartGame={onRestartGame} />
		</div>
	)
}
