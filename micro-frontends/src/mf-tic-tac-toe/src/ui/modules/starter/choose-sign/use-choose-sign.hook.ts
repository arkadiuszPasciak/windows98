import { useTranslation } from "react-i18next"
import { PlayerSign } from "../../../../domain/models"
import { useStarterDomain } from "../../../hooks"

export const useChooseSign = () => {
	const { t } = useTranslation()
	const { starterDomain } = useStarterDomain()

	const setPlayerSign = (sign: PlayerSign): void => {
		starterDomain.setPlayerSign(sign)
	}

	const playerSigns = [
		{
			content: PlayerSign.X,
			id: "mf-tic-tac-toe-starter-choose-player-sign-x",
		},
		{
			content: PlayerSign.O,
			id: "mf-tic-tac-toe-starter-choose-player-sign-o",
		},
	]

	const selectedPlayerSign = starterDomain.playerSign

	const translations = {
		label: t("mf-tic-tac-toe.starter.choose-player"),
	}

	return {
		setPlayerSign,
		selectedPlayerSign,
		playerSigns,
		translations,
	}
}
