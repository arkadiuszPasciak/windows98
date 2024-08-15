import { TicTacToeFormStart } from "@APP|Bundles/TicTacToeBundle/Services/TicTacToeFormStart.services"
import {
	ETicTacToeRadioDimension,
	ETicTacToeRadioPlayer,
	ETicTacToeValidateStatusType,
	ETicTacToeValidationError,
	ETicTacToeValidationSuccess,
	type ITicTacToeValidateFields,
} from "@APP|Bundles/TicTacToeBundle/Supports/TicTacToeFormStart.supports"
import { describe, expect, it } from "vitest"

// biome-ignore lint/suspicious/noExplicitAny: I need to refactor the whole tic tac toe bundle as micro app
const testingService = Reflect.construct(TicTacToeFormStart, []) as any

describe("[TicTacToeBundle]<Services>(TicTacToeFormStart)", () => {
	it("should work method validateDimensionType", () => {
		expect(() => testingService.validateDimensionType("")).toThrow(
			ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED,
		)

		expect(() => testingService.validateDimensionType(123)).toThrow(
			ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED,
		)

		expect(() =>
			testingService.validateDimensionType(
				ETicTacToeRadioDimension.THREE_X_THREE,
			),
		).not.toThrow()

		expect(() =>
			testingService.validateDimensionType(ETicTacToeRadioDimension.SIX_X_SIX),
		).not.toThrow()

		expect(() =>
			testingService.validateDimensionType(
				ETicTacToeRadioDimension.NINE_X_NINE,
			),
		).not.toThrow()
	})

	it("should work method validateUserName", () => {
		expect(() => testingService.validateUserName()).toThrow(
			ETicTacToeValidationError.USER_NAME_EMPTY,
		)

		expect(() => testingService.validateUserName(123)).toThrow(
			ETicTacToeValidationError.USER_NAME_EMPTY,
		)

		expect(() =>
			testingService.validateUserName("This name is too long!"),
		).toThrow(ETicTacToeValidationError.USER_NAME_TOO_LONG)

		expect(() => testingService.validateUserName("Arkadiusz")).not.toThrow()
	})

	it("should work method validatePlayerType", () => {
		expect(() => testingService.validatePlayerType()).toThrow(
			ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED,
		)

		expect(() => testingService.validatePlayerType(123)).toThrow(
			ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED,
		)

		expect(() =>
			testingService.validatePlayerType(ETicTacToeRadioPlayer.PLAYER_X),
		).not.toThrow()

		expect(() =>
			testingService.validatePlayerType(ETicTacToeRadioPlayer.PLAYER_O),
		).not.toThrow()
	})

	it("should work method validateStartData", () => {
		const firstFields = {
			userName: "Arkadiusz",
			playerType: ETicTacToeRadioPlayer.PLAYER_X,
			dimensionType: ETicTacToeRadioDimension.THREE_X_THREE,
		} as ITicTacToeValidateFields

		expect(testingService.validateStartData(firstFields)).toStrictEqual({
			type: ETicTacToeValidateStatusType.SUCCESS,
			code: ETicTacToeValidationSuccess.FIELDS_ARE_OKAY,
			fields: firstFields,
		})

		const secondFields = {
			userName: "",
			playerType: ETicTacToeRadioPlayer.PLAYER_X,
			dimensionType: ETicTacToeRadioDimension.THREE_X_THREE,
		} as ITicTacToeValidateFields

		expect(testingService.validateStartData(secondFields)).toStrictEqual({
			type: ETicTacToeValidateStatusType.ERROR,
			code: ETicTacToeValidationError.USER_NAME_EMPTY,
			fields: null,
		})

		const thirdFields = {
			userName: "This name is too long!",
			playerType: ETicTacToeRadioPlayer.PLAYER_X,
			dimensionType: ETicTacToeRadioDimension.THREE_X_THREE,
		} as ITicTacToeValidateFields

		expect(testingService.validateStartData(thirdFields)).toStrictEqual({
			type: ETicTacToeValidateStatusType.ERROR,
			code: ETicTacToeValidationError.USER_NAME_TOO_LONG,
			fields: null,
		})

		// @ts-ignore
		const forthFields = {
			userName: "Arkadiusz",
			playerType: null,
			dimensionType: ETicTacToeRadioDimension.THREE_X_THREE,
		} as ITicTacToeValidateFields

		expect(testingService.validateStartData(forthFields)).toStrictEqual({
			type: ETicTacToeValidateStatusType.ERROR,
			code: ETicTacToeValidationError.PLAYER_TYPE_UNDEFINED,
			fields: null,
		})

		// @ts-ignore
		const fifthField = {
			userName: "Arkadiusz",
			playerType: ETicTacToeRadioPlayer.PLAYER_O,
			dimensionType: null,
		} as ITicTacToeValidateFields

		expect(testingService.validateStartData(fifthField)).toStrictEqual({
			type: ETicTacToeValidateStatusType.ERROR,
			code: ETicTacToeValidationError.DIMENSION_TYPE_UNDEFINED,
			fields: null,
		})
	})
})
