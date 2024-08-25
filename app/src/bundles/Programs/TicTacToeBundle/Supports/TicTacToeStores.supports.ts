import type { TicTacToeFormStart } from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeFormStart.services"
import type { TicTacToeGame } from "@APP/src/bundles/Programs/TicTacToeBundle/Services/TicTacToeGame.services"
import type { TTicTacToeCheckStatusGame } from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports"
import type {
	ITicTacToeValidateFields,
	TTicTacToeRadioDimension,
	TTicTacToeRadioPlayer,
	TTicTacToeValidationError,
} from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import type { Nullable } from "vitest"

export interface ITicTacToeStoresState {
	form: {
		data: {
			computerType: TTicTacToeRadioPlayer
			dimensionType: TTicTacToeRadioDimension
			userName: string
			playerType: TTicTacToeRadioPlayer
		}
		errorState: {
			state: boolean
			code: Nullable<TTicTacToeValidationError>
		}
		status: boolean
	}
	game: {
		status: TTicTacToeCheckStatusGame
		scoreModal: boolean
	}
	services: {
		TicTacToeGame: TicTacToeGame
		TicTacToeFormStart: TicTacToeFormStart
	}
}

export interface ITicTacToeStoresActions extends ITicTacToeStoresState {
	clearErrorState(): void
	updateGameData(fields: ITicTacToeValidateFields): void
	makeMove(event: Event): void
	restartGame(): void
	setErrorState(errorCode: TTicTacToeValidationError): void
	submitForm(event: Event): void
}
