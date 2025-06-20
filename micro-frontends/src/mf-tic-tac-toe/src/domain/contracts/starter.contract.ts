import type { BoardType, GameData, PlayerSign } from "../models"

export interface TicTacToeStarterDomainContract extends GameData {
	setBoardType(type: BoardType): void
	setPlayerName(name: string): void
	setPlayerSign(sign: PlayerSign): void
	getGameData(): GameData
	reset(): void
}
