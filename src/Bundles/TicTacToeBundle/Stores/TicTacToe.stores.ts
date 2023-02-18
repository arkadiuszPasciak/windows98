import { defineStore } from 'pinia'
import { TicTacToe } from '@Bundles/TicTacToeBundle/Services/TicTacToe.services'
import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToe.supports'

const ticTacToe = new TicTacToe()

export const useTicTacToeStore = defineStore('tic-tac-toe', {
  state: () => ({
    userName: '' as string,
    playerType: ETicTacToeRadioPlayer.PLAYER_X as TTicTacToeRadioPlayer,
    dimensionType:
      ETicTacToeRadioDimension.THREE_X_THREE as TTicTacToeRadioDimension,
  }),
  actions: {
    validateStartData() {
      ticTacToe.validateStartData(
        this.userName,
        this.playerType,
        this.dimensionType,
      )
    },
  },
})
