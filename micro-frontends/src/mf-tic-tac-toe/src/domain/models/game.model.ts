import type { FieldType } from "./field.model"
import type { PlayerSign } from "./player.model"

export interface GameData {
	fieldType: FieldType
	playerName: string
	playerSign: PlayerSign
}
