import {
  ETicTacToeRadioDimension,
  ETicTacToeRadioPlayer,
  ETicTacToeValidationError,
  ETicTacToeValidateStatusType,
  ETicTacToeValidationSuccess,
  TTicTacToeRadioDimension,
  TTicTacToeRadioPlayer,
  TTicTacToeValidationError,
  ITicTacToeValidateStatus,
  ITicTacToeValidateFields,
} from '@Bundles/TicTacToeBundle/Supports/TicTacToe.supports'

export class TicTacToe {
  public submitForm(event: Event) {
    event.preventDefault()

    if (event.target instanceof HTMLFormElement) {
      const formData = this.getFormData(event.target)

      if (!formData) {
        return null
      }

      const validateFields = this.validateStartData(formData)

      return validateFields
    }
  }

  private getFormData(
    eventTarget: EventTarget,
  ): ITicTacToeValidateFields | null {
    if (eventTarget instanceof HTMLFormElement) {
      const formData = new FormData(eventTarget)

      const fields = {
        userName: formData.get('tic-tac-toe-enter-your-name'),
        playerType: formData.get('tic-tac-toc-choose-player'),
        dimensionType: formData.get('tic-tac-toc-choose-dimension'),
      } as ITicTacToeValidateFields

      return fields
    } else {
      return null
    }
  }

  private validateStartData(
    fields: ITicTacToeValidateFields,
  ): ITicTacToeValidateStatus {
    try {
      this.validateUserName(fields.userName)

      this.validatePlayerType(fields.playerType)

      this.validateDimensionType(fields.dimensionType)

      return {
        type: ETicTacToeValidateStatusType.SUCCESS,
        code: ETicTacToeValidationSuccess.FIELDS_ARE_OKAY,
        fields: fields,
      }
    } catch (error) {
      return {
        type: ETicTacToeValidateStatusType.ERROR,
        code: error as TTicTacToeValidationError,
        fields: null,
      }
    }
  }

  private validateUserName(userName: string): void {
    if (!userName || typeof userName !== 'string') {
      throw ETicTacToeValidationError.USER_NAME_EMPTY
    }

    if (userName.length > 20) {
      throw ETicTacToeValidationError.USER_NAME_TOO_LONG
    }
  }

  private validatePlayerType(playerType: TTicTacToeRadioPlayer): void {
    if (!playerType || typeof playerType !== 'string') {
      throw ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED
    }

    switch (playerType) {
      case ETicTacToeRadioPlayer.PLAYER_X:
      case ETicTacToeRadioPlayer.PLAYER_O:
        return
      default:
        throw ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED
    }
  }

  private validateDimensionType(dimensionType: TTicTacToeRadioDimension): void {
    if (!dimensionType || typeof dimensionType !== 'string') {
      throw ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED
    }

    switch (dimensionType) {
      case ETicTacToeRadioDimension.THREE_X_THREE:
      case ETicTacToeRadioDimension.SIX_X_SIX:
      case ETicTacToeRadioDimension.NINE_X_NINE:
        return
      default:
        throw ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED
    }
  }
}
