import { defineStore } from 'pinia'
import { TicTacToeFormStart } from '@Bundles/TicTacToeBundle/Services/TicTacToeFormStart.services'
import { TicTacToeGame } from '@Bundles/TicTacToeBundle/Services/TicTacToeGame.services'
import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  ETicTacToeValidateStatusType,
  ITicTacToeValidateFields,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
  TTicTacToeValidationError,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

export const useTicTacToeStore = defineStore('tic-tac-toe', {
  state: () => ({
    userName: '' as string,
    computerType: ETicTacToeRadioPlayer.PLAYER_O as TTicTacToeRadioPlayer,
    playerType: ETicTacToeRadioPlayer.PLAYER_X as TTicTacToeRadioPlayer,
    dimensionType:
      ETicTacToeRadioDimension.THREE_X_THREE as TTicTacToeRadioDimension,
    errorState: {
      state: false as boolean,
      code: '' as string,
    },
    isStartValidate: true as boolean,
    services: {
      TicTacToeGame: new TicTacToeGame(ETicTacToeRadioDimension.THREE_X_THREE),
      TicTacToeFormStart: new TicTacToeFormStart(),
    },
  }),
  actions: {
    submitForm(event: Event): void {
      this.clearErrorState()

      const formStatus = this.services.TicTacToeFormStart.submitForm(event)

      if (!formStatus) {
        return
      }

      if (formStatus.type === ETicTacToeValidateStatusType.SUCCESS) {
        if (!formStatus.fields) {
          return
        }

        this.updateGameData(formStatus.fields)

        this.isStartValidate = false
      } else if (formStatus.type === ETicTacToeValidateStatusType.ERROR) {
        this.setErrorState(formStatus.code as TTicTacToeValidationError)
      }
    },

    clearErrorState(): void {
      this.errorState.state = false
      this.errorState.code = ''
    },

    setErrorState(errorCode: TTicTacToeValidationError): void {
      this.errorState.state = true
      this.errorState.code = errorCode
    },

    updateGameData(fields: ITicTacToeValidateFields): void {
      if (this.userName !== fields.userName) {
        this.userName = fields.userName
      }

      if (this.playerType !== fields.playerType) {
        this.playerType = fields.playerType
      }

      if (this.playerType === ETicTacToeRadioPlayer.PLAYER_O) {
        this.computerType = ETicTacToeRadioPlayer.PLAYER_X
      }

      if (this.dimensionType !== fields.dimensionType) {
        this.dimensionType = fields.dimensionType
      }
    },

    restartGame(): void {
      this.isStartValidate = true
    },

    makeMove(event: Event): void {
      this.services.TicTacToeGame.makeMove(
        event,
        this.playerType,
        this.computerType,
      )
    },
  },
})
