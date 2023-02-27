import { expect, it, describe } from 'vitest'
import { TicTacToeFormStart } from '@Bundles/TicTacToeBundle/Services/TicTacToeFormStart.services'
import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  ETicTacToeValidationError,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports'

const { validateDimensionType, validateUserName, validatePlayerType } =
  Reflect.construct(TicTacToeFormStart, []) as any

describe('[TicTacToeBundle]<Services>(TicTacToeFormStart)', () => {
  it('should work method validateDimensionType', async () => {
    expect(() => validateDimensionType('')).toThrow(
      ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED,
    )

    expect(() => validateDimensionType(123)).toThrow(
      ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED,
    )

    expect(() =>
      validateDimensionType(ETicTacToeRadioDimension.THREE_X_THREE),
    ).not.toThrow()

    expect(() =>
      validateDimensionType(ETicTacToeRadioDimension.SIX_X_SIX),
    ).not.toThrow()

    expect(() =>
      validateDimensionType(ETicTacToeRadioDimension.NINE_X_NINE),
    ).not.toThrow()
  })

  it('should work method validateUserName', async () => {
    expect(() => validateUserName()).toThrow(
      ETicTacToeValidationError.USER_NAME_EMPTY,
    )

    expect(() => validateUserName(123)).toThrow(
      ETicTacToeValidationError.USER_NAME_EMPTY,
    )

    expect(() => validateUserName('This name is too long!')).toThrow(
      ETicTacToeValidationError.USER_NAME_TOO_LONG,
    )

    expect(() => validateUserName('Arkadiusz')).not.toThrow()
  })

  it('should work method validatePlayerType', async () => {
    expect(() => validatePlayerType()).toThrow(
      ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED,
    )

    expect(() => validatePlayerType(123)).toThrow(
      ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED,
    )

    expect(() =>
      validatePlayerType(ETicTacToeRadioPlayer.PLAYER_X),
    ).not.toThrow()

    expect(() =>
      validatePlayerType(ETicTacToeRadioPlayer.PLAYER_O),
    ).not.toThrow()
  })
})
