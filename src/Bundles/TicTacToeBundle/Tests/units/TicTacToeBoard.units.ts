import { expect, it, describe } from 'vitest'
import { MTicTacToeLengthOfBoard } from '@Bundles/TicTacToeBundle/Mocks/TicTacToeBoard.mocks'
import { TicTacToeBoard } from '@Bundles/TicTacToeBundle/Services/TicTacToeBoard.services'
import { ETicTacToeRadioDimension } from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

const ticTacToeBoard3x3 = new TicTacToeBoard(
  ETicTacToeRadioDimension.THREE_X_THREE,
)

const ticTacToeBoard6x6 = new TicTacToeBoard(ETicTacToeRadioDimension.SIX_X_SIX)

const ticTacToeBoard9x9 = new TicTacToeBoard(
  ETicTacToeRadioDimension.NINE_X_NINE,
)

describe('[TicTacToeBundle]<Services>(TicTacToeBoard)', () => {
  it('3x3: check states', async () => {
    expect(ticTacToeBoard3x3.amountOfColumns).toBe(3)

    expect(ticTacToeBoard3x3.amountOfFields).toBe(9)

    expect(ticTacToeBoard3x3.amountOfRows).toBe(3)

    expect(ticTacToeBoard3x3.currentBoard).toStrictEqual(
      MTicTacToeLengthOfBoard.THREE_X_THREE,
    )

    expect(ticTacToeBoard3x3.columnAndRow).toStrictEqual(['3', '3'])

    expect(ticTacToeBoard3x3.dimension).toBe(
      ETicTacToeRadioDimension.THREE_X_THREE,
    )
  })

  it('6x6: check states', async () => {
    expect(ticTacToeBoard6x6.amountOfColumns).toBe(6)

    expect(ticTacToeBoard6x6.amountOfFields).toBe(36)

    expect(ticTacToeBoard6x6.amountOfRows).toBe(6)

    expect(ticTacToeBoard6x6.currentBoard).toStrictEqual(
      MTicTacToeLengthOfBoard.SIX_X_SIX,
    )

    expect(ticTacToeBoard6x6.columnAndRow).toStrictEqual(['6', '6'])

    expect(ticTacToeBoard6x6.dimension).toBe(ETicTacToeRadioDimension.SIX_X_SIX)
  })

  it('9x9: check states', async () => {
    expect(ticTacToeBoard9x9.amountOfColumns).toBe(9)

    expect(ticTacToeBoard9x9.amountOfFields).toBe(81)

    expect(ticTacToeBoard9x9.amountOfRows).toBe(9)

    expect(ticTacToeBoard9x9.currentBoard).toStrictEqual(
      MTicTacToeLengthOfBoard.NINE_X_NINE,
    )

    expect(ticTacToeBoard9x9.columnAndRow).toStrictEqual(['9', '9'])

    expect(ticTacToeBoard9x9.dimension).toBe(
      ETicTacToeRadioDimension.NINE_X_NINE,
    )
  })
})
