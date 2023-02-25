import { defineStore } from 'pinia'
import { TicTacToeFormStart } from '@Bundles/TicTacToeBundle/Services/TicTacToeFormStart.services'
import { TicTacToeGame } from '@Bundles/TicTacToeBundle/Services/TicTacToeGame.services'
import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  ETicTacToeValidateStatusType,
  TTicTacToeValidationError,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'
import {
  ETicTacToeStatusGame,
  TTicTacToeCheckStatusGame,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'
import {
  ITicTacToeStoresState,
  ITicTacToeStoresActions,
} from '@/Bundles/TicTacToeBundle/Supports/TicTacToeStores.supports'

export const useTicTacToeStore = defineStore('tic-tac-toe', {
  state: () =>
    ({
      form: {
        data: {
          computerType: ETicTacToeRadioPlayer.PLAYER_O,
          dimensionType: ETicTacToeRadioDimension.THREE_X_THREE,
          playerType: ETicTacToeRadioPlayer.PLAYER_X,
          userName: '',
        },
        errorState: {
          state: false,
          code: null,
        },
        status: true,
      },
      game: {
        status: ETicTacToeStatusGame.PLAYING,
        scoreModal: false,
      },
      services: {
        TicTacToeGame: new TicTacToeGame(
          ETicTacToeRadioDimension.THREE_X_THREE,
        ),
        TicTacToeFormStart: new TicTacToeFormStart(),
      },
    } as ITicTacToeStoresState),
  actions: {
    clearErrorState() {
      this.form.errorState.state = false
      this.form.errorState.code = null
    },

    updateGameData(fields) {
      if (this.form.data.userName !== fields.userName) {
        this.form.data.userName = fields.userName
      }

      if (this.form.data.playerType !== fields.playerType) {
        this.form.data.playerType = fields.playerType
      }

      if (this.form.data.playerType === ETicTacToeRadioPlayer.PLAYER_O) {
        this.form.data.computerType = ETicTacToeRadioPlayer.PLAYER_X
      }

      if (this.form.data.dimensionType !== fields.dimensionType) {
        this.form.data.dimensionType = fields.dimensionType
      }
    },

    makeMove(event) {
      if (this.game.status !== ETicTacToeStatusGame.PLAYING) {
        return
      }

      try {
        this.services.TicTacToeGame.makeMove(
          event,
          this.form.data.playerType,
          this.form.data.computerType,
        )
      } catch (status) {
        this.game.status = status as TTicTacToeCheckStatusGame
        this.game.scoreModal = true
      }
    },

    restartGame() {
      this.game.scoreModal = false
      this.form.status = true
      this.game.status = ETicTacToeStatusGame.PLAYING
      this.services.TicTacToeGame = new TicTacToeGame(
        ETicTacToeRadioDimension.THREE_X_THREE,
      )
    },

    setErrorState(errorCode) {
      this.form.errorState.state = true
      this.form.errorState.code = errorCode
    },

    submitForm(event) {
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

        this.form.status = false
      } else if (formStatus.type === ETicTacToeValidateStatusType.ERROR) {
        this.setErrorState(formStatus.code as TTicTacToeValidationError)
      }
    },
  } as ITicTacToeStoresActions,
})
