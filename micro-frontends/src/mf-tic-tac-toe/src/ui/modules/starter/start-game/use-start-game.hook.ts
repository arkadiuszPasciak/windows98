import { useTranslation } from "react-i18next"
import { PlayerSign } from "../../../../domain/models"
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

		// TODO: It should be information available in the starter domain
		const computerSign =
			gameStarterData.playerSign === PlayerSign.X ? PlayerSign.O : PlayerSign.X

		gameDomain.initGame(
			computerSign,
			gameStarterData.boardType,
			gameStarterData.playerSign,
			gameStarterData.playerName,
		)

		onClick()
	}

	const isButtonDisabled = starterDomain.playerName.length === 0

	return {
		startGame,
		translations,
		isButtonDisabled,
	}
}
