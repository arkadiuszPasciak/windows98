import { makeAutoObservable } from "mobx"
import type { TicTacToeStarterDomainContract } from "../contracts"
import { BoardType, type GameData, PlayerSign } from "../models"

export class TicTacToeStarterDomain implements TicTacToeStarterDomainContract {
	constructor() {
		makeAutoObservable(this)

		this.boardType = this.defaultData.boardType
		this.playerName = this.defaultData.playerName
		this.playerSign = this.defaultData.playerSign
	}

	private readonly defaultData: GameData = {
		boardType: BoardType.THREE_BY_THREE,
		playerName: "",
		playerSign: PlayerSign.X,
	}

	public boardType: BoardType
	public playerName: string
	public playerSign: PlayerSign

	public setBoardType(type: BoardType): void {
		this.boardType = type
	}

	public setPlayerName(name: string): void {
		this.playerName = name
	}

	public setPlayerSign(sign: PlayerSign): void {
		this.playerSign = sign
	}

	public getGameData(): GameData {
		return {
			boardType: this.boardType,
			playerName: this.playerName,
			playerSign: this.playerSign,
		}
	}
}

export const ticTacToeStarterDomain = new TicTacToeStarterDomain()
