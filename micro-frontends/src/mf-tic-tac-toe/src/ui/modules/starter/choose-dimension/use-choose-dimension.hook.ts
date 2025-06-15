import { useTranslation } from "react-i18next"
import { BoardType } from "../../../../domain/models"
import { useStarterDomain } from "../../../hooks"

export const useChooseDimension = () => {
	const { t } = useTranslation()
	const { starterDomain } = useStarterDomain()

	const setBoardType = (type: BoardType): void => {
		starterDomain.setBoardType(type)
	}

	const boardTypes = [
		{
			content: BoardType.THREE_BY_THREE,
			id: "mf-tic-tac-toe-starter-choose-dimension-3x3",
			name: "3x3",
		},
		{
			content: BoardType.SIX_BY_SIX,
			id: "mf-tic-tac-toe-starter-choose-dimension-6x6",
			name: "6x6",
		},
	]

	const selectedBoardType = starterDomain.boardType

	const translations = {
		label: t("mf-tic-tac-toe.starter.choose-dimension"),
	}

	return {
		setBoardType,
		selectedBoardType,
		boardTypes,
		translations,
	}
}
