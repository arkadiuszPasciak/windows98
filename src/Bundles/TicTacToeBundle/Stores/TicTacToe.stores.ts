import { defineStore } from 'pinia'
import { TicTacToe } from '@Bundles/TicTacToeBundle/Services/TicTacToe.services'
import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  ETicTacToeValidateStatusType,
  ITicTacToeValidateFields,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
  TTicTacToeValidationError,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToe.supports'

const ticTacToe = new TicTacToe()

export const useTicTacToeStore = defineStore('tic-tac-toe', {
  state: () => ({
    userName: '' as string,
    playerType: ETicTacToeRadioPlayer.PLAYER_X as TTicTacToeRadioPlayer,
    dimensionType:
      ETicTacToeRadioDimension.THREE_X_THREE as TTicTacToeRadioDimension,
    errorState: {
      state: false as boolean,
      code: '' as string,
    },
    isStartValidate: true as boolean,
  }),
  actions: {
    submitForm(event: Event): void {
      this.clearErrorState()

      const formStatus = ticTacToe.submitForm(event)

      if (!formStatus) {
        return
      }

      if (formStatus.type === ETicTacToeValidateStatusType.SUCCESS) {
        console.log('success!')
        if (!formStatus.fields) {
          return
        }

        this.updateGameData(formStatus.fields)

        this.isStartValidate = false
      } else if (formStatus.type === ETicTacToeValidateStatusType.ERROR) {
        console.log('error!')
        this.setErrorState(formStatus.code as TTicTacToeValidationError)
      }
    },

    clearErrorState(): void {
      this.errorState.state = false
      this.errorState.code = ''
    },

    setErrorState(errorCode: TTicTacToeValidationError) {
      this.errorState.state = true
      this.errorState.code = errorCode
    },

    updateGameData(fields: ITicTacToeValidateFields) {
      if (this.userName !== fields.userName) {
        this.userName = fields.userName
      }

      if (this.playerType !== fields.playerType) {
        this.playerType = fields.playerType
      }

      if (this.dimensionType !== fields.dimensionType) {
        this.dimensionType = fields.dimensionType
      }
    },
  },
})
