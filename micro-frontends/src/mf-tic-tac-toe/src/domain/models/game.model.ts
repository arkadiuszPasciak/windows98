import type { BoardType } from "./board.model"
import type { PlayerSign } from "./player.model"

export interface GameData {
	boardType: BoardType
	playerName: string
	playerSign: PlayerSign
	computerSign: PlayerSign
}
