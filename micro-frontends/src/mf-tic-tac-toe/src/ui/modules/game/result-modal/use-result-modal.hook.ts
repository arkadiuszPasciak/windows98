import { useTranslation } from "react-i18next"
import { GameStatus } from "../../../../domain/models"
import { useGameDomain } from "../../../hooks"

export function useResultModal() {
	const { t } = useTranslation()
	const { gameDomain } = useGameDomain()

	const isGameFinished =
		gameDomain.statusResult.status === GameStatus.COMPLETED ||
		gameDomain.statusResult.status === GameStatus.DRAW

	const result = gameDomain.statusResult.status

	const playerName =
		gameDomain.currentPlayer === gameDomain.human.sign
			? gameDomain.human.name
			: t("mf-tic-tac-toe.starter.computer")

	const translations = {
		button: {
			text: t("mf-tic-tac-toe.game.new-game"),
		},
		modal: {
			title: t("mf-tic-tac-toe.game.score"),
		},
		result: {
			draw: t("mf-tic-tac-toe.game.draw"),
			playerHasWon: t("mf-tic-tac-toe.game.player-has-won", {
				name: playerName,
			}),
		},
	}

	return {
		isGameFinished,
		translations,
		result,
	}
}
