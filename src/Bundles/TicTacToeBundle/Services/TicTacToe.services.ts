import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  ETicTacToeValidationError,
  ITicTacToeFieldsValues,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToe.supports'

export class TicTacToe {
  public submitForm(event: Event) {
    event.preventDefault()

    if (event.target instanceof HTMLFormElement) {
      const formData = this.getFormData(event.target)

      if (!formData) {
        return null
      }

      this.validateStartData(
        formData.playerNameValue,
        formData.choosePlayerValue,
        formData.chooseDimensionValue,
      )
    }
  }

  private getFormData(eventTarget: EventTarget) {
    if (eventTarget instanceof HTMLFormElement) {
      const formData = new FormData(eventTarget)

      const fields = {
        playerNameValue: formData.get('tic-tac-toe-enter-your-name'),
        choosePlayerValue: formData.get('tic-tac-toc-choose-player'),
        chooseDimensionValue: formData.get('tic-tac-toc-choose-dimension'),
      } as ITicTacToeFieldsValues

      return fields
    } else {
      return null
    }
  }

  private validateStartData(
    userName: string | null,
    playerType: TTicTacToeRadioPlayer,
    dimensionType: TTicTacToeRadioDimension,
  ): void {
    try {
      this.validateUserName(userName)

      this.validatePlayerType(playerType)

      this.validateDimensionType(dimensionType)
    } catch (error) {
      console.log(error)
    }
  }

  private validateUserName(userName: string | null) {
    if (!userName || typeof userName !== 'string') {
      throw new Error(ETicTacToeValidationError.USER_NAME_EMPTY)
    }

    if (userName.length > 20) {
      throw new Error(ETicTacToeValidationError.USER_NAME_TOO_LONG)
    }
  }

  private validatePlayerType(playerType: TTicTacToeRadioPlayer) {
    if (!playerType || typeof playerType !== 'string') {
      throw new Error(ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED)
    }

    switch (playerType) {
      case ETicTacToeRadioPlayer.PLAYER_X:
      case ETicTacToeRadioPlayer.PLAYER_O:
        return
      default:
        throw new Error(ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED)
    }
  }

  private validateDimensionType(dimensionType: TTicTacToeRadioDimension) {
    if (!dimensionType || typeof dimensionType !== 'string') {
      throw new Error(ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED)
    }

    switch (dimensionType) {
      case ETicTacToeRadioDimension.THREE_X_THREE:
      case ETicTacToeRadioDimension.SIX_X_SIX:
      case ETicTacToeRadioDimension.NINE_X_NINE:
        return
      default:
        throw new Error(ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED)
    }
  }
}
