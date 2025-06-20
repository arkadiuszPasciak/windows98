import { GameStatus } from "../../../../domain/models"
import { useGameDomain } from "../../../hooks"

export function useBoard() {
	const { gameDomain } = useGameDomain()

	const handleCellClick = (index: number) => {
		gameDomain.makeMove(index)
	}

	const isGameFinished =
		gameDomain.statusResult.status === GameStatus.COMPLETED ||
		gameDomain.statusResult.status === GameStatus.DRAW

	return {
		boardCells: gameDomain.boardCells,
		boardType: gameDomain.boardType,
		handleCellClick,
		isGameFinished,
	}
}
