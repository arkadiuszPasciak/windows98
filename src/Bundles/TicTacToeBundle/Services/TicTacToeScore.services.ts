import { VueI18nTranslation } from 'vue-i18n'
import {
  ETicTacToeStatusGame,
  TTicTacToeCheckStatusGame,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'

export class TicTacToeScore {
  public getDescriptionByScoreResult(
    t: VueI18nTranslation,
    score: TTicTacToeCheckStatusGame,
    playerName: string,
  ): string {
    switch (score) {
      case ETicTacToeStatusGame.DRAW:
        return t('TicTacToeBundle.draw')
      case ETicTacToeStatusGame.WINNER_O:
      case ETicTacToeStatusGame.WINNER_X:
        return t('TicTacToeBundle.player-has-won', {
          name: playerName,
        })
      default:
        return t('TicTacToeBundle.score-undefined')
    }
  }
}
