import { DSButton } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import styles from "./start-game.module.scss"
import type { StartGameProps } from "./start-game.type"
import { useStartGame } from "./use-start-game.hook"

export const StartGame: FunctionComponent<StartGameProps> = observer(
	({ onClick }) => {
		const { startGame, translations, isButtonDisabled } = useStartGame({
			onClick,
		})

		return (
			<div className={styles["button-wrapper"]}>
				<DSButton
					id="mf-tic-tac-toe-starter-start-game"
					text={translations.button}
					onClick={startGame}
					disabled={isButtonDisabled}
				/>
			</div>
		)
	},
)
