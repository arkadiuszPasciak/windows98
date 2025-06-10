import { makeAutoObservable } from "mobx"
import type { TicTacToeStarterDomainContract } from "../contracts"
import { FieldType, type GameData, PlayerSign } from "../models"

export class TicTacToeStarterDomain implements TicTacToeStarterDomainContract {
	constructor() {
		makeAutoObservable(this)

		this.fieldType = this.defaultData.fieldType
		this.playerName = this.defaultData.playerName
		this.playerSign = this.defaultData.playerSign
	}

	private readonly defaultData: GameData = {
		fieldType: FieldType.THREE_X_THREE,
		playerName: "",
		playerSign: PlayerSign.X,
	}

	public fieldType: FieldType
	public playerName: string
	public playerSign: PlayerSign

	public setFieldType(type: FieldType): void {
		this.fieldType = type
	}

	public setPlayerName(name: string): void {
		this.playerName = name
	}

	public setPlayerSign(sign: PlayerSign): void {
		this.playerSign = sign
	}

	public getGameData(): GameData {
		return {
			fieldType: this.fieldType,
			playerName: this.playerName,
			playerSign: this.playerSign,
		}
	}
}

export const ticTacToeStarterDomain = new TicTacToeStarterDomain()
