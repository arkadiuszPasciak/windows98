import { makeAutoObservable } from "mobx"
import type { TicTacToeStarterDomainContract } from "../contracts"
import { BoardType, type GameData, PlayerSign } from "../models"

export class TicTacToeStarterDomain implements TicTacToeStarterDomainContract {
	constructor() {
		makeAutoObservable(this)

		this.boardType = this.defaultData.boardType
		this.playerName = this.defaultData.playerName
		this.playerSign = this.defaultData.playerSign
		this.computerSign = this.defaultData.computerSign
	}

	private readonly defaultData: GameData = {
		boardType: BoardType.THREE_BY_THREE,
		playerName: "",
		playerSign: PlayerSign.X,
		computerSign: PlayerSign.O,
	}

	public boardType: BoardType
	public playerName: string
	public playerSign: PlayerSign
	public computerSign: PlayerSign

	public setBoardType(type: BoardType): void {
		this.boardType = type
	}

	public setPlayerName(name: string): void {
		this.playerName = name
	}

	public setPlayerSign(sign: PlayerSign): void {
		this.playerSign = sign

		this.computerSign = sign === PlayerSign.X ? PlayerSign.O : PlayerSign.X
	}

	public getGameData(): GameData {
		return {
			boardType: this.boardType,
			playerName: this.playerName,
			playerSign: this.playerSign,
			computerSign: this.computerSign,
		}
	}
}

export const ticTacToeStarterDomain = new TicTacToeStarterDomain()
