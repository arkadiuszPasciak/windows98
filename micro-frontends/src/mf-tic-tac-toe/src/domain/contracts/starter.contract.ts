import type { FieldType, GameData, PlayerSign } from "../models"

export interface TicTacToeStarterDomainContract extends GameData {
	setFieldType(type: FieldType): void
	setPlayerName(name: string): void
	setPlayerSign(sign: PlayerSign): void
	getGameData(): GameData
}
