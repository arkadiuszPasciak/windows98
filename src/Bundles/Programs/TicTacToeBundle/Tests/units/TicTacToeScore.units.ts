import { expect, it, describe } from 'vitest'
import { TicTacToeScore } from '@Bundles/TicTacToeBundle/Services/TicTacToeScore.services'
import { ETicTacToeStatusGame } from '@Bundles/TicTacToeBundle/Supports/TicTacToeCheckStatusGame.supports'
import { ETicTacToeRadioPlayer } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

const { getDescriptionByScoreResult } = new TicTacToeScore()

describe('[TicTacToeBundle]<Services>(TicTacToeScore)', () => {
  it('checks method getDescriptionByScoreResult', async () => {
    const translate = (text: string) => {
      return text
    }

    const draw = getDescriptionByScoreResult(
      translate,
      ETicTacToeStatusGame.DRAW,
      'Arkadiusz',
      ETicTacToeRadioPlayer.PLAYER_O,
    )

    expect(draw).toBe('TicTacToeBundle.draw')

    const winnerO = getDescriptionByScoreResult(
      translate,
      ETicTacToeStatusGame.WINNER_O,
      'Arkadiusz',
      ETicTacToeRadioPlayer.PLAYER_O,
    )

    expect(winnerO).toBe('TicTacToeBundle.player-has-won')

    const winnerX = getDescriptionByScoreResult(
      translate,
      ETicTacToeStatusGame.WINNER_X,
      'Arkadiusz',
      ETicTacToeRadioPlayer.PLAYER_X,
    )

    expect(winnerX).toBe('TicTacToeBundle.player-has-won')

    const undefinedScore = getDescriptionByScoreResult(
      translate,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      'undefined',
      'Arkadiusz',
      ETicTacToeRadioPlayer.PLAYER_O,
    )

    expect(undefinedScore).toBe('TicTacToeBundle.score-undefined')
  })
})