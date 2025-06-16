import { useTranslation } from "react-i18next"
import { PlayerSignType, type UsePlayerSign } from "./player-sign.type"

export function usePlayerSign({ playerType, playerName }: UsePlayerSign) {
	const { t } = useTranslation()

	const getName = (): string => {
		switch (playerType) {
			case PlayerSignType.HUMAN:
				if (playerName) return playerName

				return translation.defaultPlayer

			default:
				return translation.computer
		}
	}

	const translation = {
		computer: t("mf-tic-tac-toe.starter.computer"),
		defaultPlayer: t("mf-tic-tac-toe.starter.default-player"),
	}

	const name = getName()

	return {
		name,
	}
}
