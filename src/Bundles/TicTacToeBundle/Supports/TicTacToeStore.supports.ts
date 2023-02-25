import { Nullable } from 'vitest'
import { TicTacToeFormStart } from '@Bundles/TicTacToeBundle/Services/TicTacToeFormStart.services'
import { TicTacToeGame } from '@Bundles/TicTacToeBundle/Services/TicTacToeGame.services'
import {
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
  TTicTacToeValidationError,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import { TTicTacToeCheckStatusGame } from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'

export interface ITicTacToeStoreState {
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
