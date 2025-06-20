import { DSButton, DSModal, DSText } from "@windows98/design-system"
import { observer } from "mobx-react-lite"
import type { FunctionComponent } from "react"
import { GameStatus } from "../../../../domain/models"
import styles from "./result-modal.module.scss"
import type { ResultModalProps } from "./result-modal.type"
import { useResultModal } from "./use-result-modal.hook"

export const ResultModal: FunctionComponent<ResultModalProps> = observer(
	({ onRestartGame }) => {
		const { translations, result, isGameFinished } = useResultModal()

		return (
			isGameFinished && (
				<DSModal
					id="mf-tic-tac-toe-game-result"
					moveWindow={false}
					onClose={onRestartGame}
					title={translations.modal.title}
					width="150px"
					height="100px"
				>
					<div className={styles["result-modal-wrapper"]}>
						{result === GameStatus.DRAW && (
							<DSText
								text={translations.result.draw}
								id="mf-tic-tac-toe-game-result-draw"
							/>
						)}
						{result === GameStatus.COMPLETED && (
							<DSText
								text={translations.result.playerHasWon}
								id="mf-tic-tac-toe-game-result-completed"
							/>
						)}
						<DSButton
							id={"mf-tic-tac-toe-game-result-new-game"}
							text={translations.button.text}
							onClick={onRestartGame}
						/>
					</div>
				</DSModal>
			)
		)
	},
)
