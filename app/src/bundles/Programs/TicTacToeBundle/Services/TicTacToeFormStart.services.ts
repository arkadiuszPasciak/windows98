import {
	ETicTacToeRadioDimension,
	ETicTacToeRadioPlayer,
	ETicTacToeValidateStatusType,
	ETicTacToeValidationError,
	ETicTacToeValidationSuccess,
	type ITicTacToeValidateFields,
	type ITicTacToeValidateStatus,
	type TTicTacToeRadioDimension,
	type TTicTacToeRadioPlayer,
	type TTicTacToeValidationError,
} from "@APP/src/bundles/Programs/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import type { Nullable } from "vitest"

export class TicTacToeFormStart {
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
	): Nullable<ITicTacToeValidateFields> {
		if (eventTarget instanceof HTMLFormElement) {
			const formData = new FormData(eventTarget)

			const fields = {
				userName: formData.get("tic-tac-toe-enter-your-name"),
				playerType: formData.get("tic-tac-toc-choose-player"),
				dimensionType: formData.get("tic-tac-toc-choose-dimension"),
			} as ITicTacToeValidateFields

			return fields
		}
		return null
	}

	private validateDimensionType(dimensionType: TTicTacToeRadioDimension): void {
		if (!dimensionType || typeof dimensionType !== "string") {
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

	private validateUserName(userName: string): void {
		if (!userName || typeof userName !== "string") {
			throw ETicTacToeValidationError.USER_NAME_EMPTY
		}

		if (userName.length > 20) {
			throw ETicTacToeValidationError.USER_NAME_TOO_LONG
		}
	}

	private validatePlayerType(playerType: TTicTacToeRadioPlayer): void {
		if (!playerType || typeof playerType !== "string") {
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
}
