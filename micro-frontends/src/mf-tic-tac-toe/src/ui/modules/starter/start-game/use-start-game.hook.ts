import { useTranslation } from "react-i18next"
import { useGameDomain, useStarterDomain } from "../../../hooks"
import type { UseStartGame } from "./start-game.type"

export const useStartGame = ({ onClick }: UseStartGame) => {
	const { t } = useTranslation()
	const { starterDomain } = useStarterDomain()
	const { gameDomain } = useGameDomain()

	const translations = {
		button: t("mf-tic-tac-toe.starter.start"),
	}

	const startGame = () => {
		const gameStarterData = starterDomain.getGameData()

		gameDomain.initGame(
			gameStarterData.computerSign,
			gameStarterData.boardType,
			gameStarterData.playerSign,
			gameStarterData.playerName,
		)

		onClick()

		starterDomain.reset()
	}

	const isButtonDisabled = starterDomain.playerName.length === 0

	return {
		startGame,
		translations,
		isButtonDisabled,
	}
}
