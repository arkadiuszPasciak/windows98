import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { vibrationAPIMock } from "../../../../../@test/vitest/mocks"
import { VibrationAPIRepository } from "../../src/data/repositories"

describe("VibrationAPIRepository", () => {
	let vibrationAPIRepository: VibrationAPIRepository

	afterEach(() => {
		vibrationAPIMock.reset()
	})

	beforeEach(() => {
		vibrationAPIRepository = new VibrationAPIRepository()
		vibrationAPIMock.implementMock()
	})

	it("calls window.navigator.vibrate with a numeric pattern and returns the result", () => {
		const result = vibrationAPIRepository.vibrate(200)
		expect(result).toBe(true)
		expect(globalThis.navigator.vibrate).toHaveBeenCalledWith(200)
	})

	it("calls window.navigator.vibrate with the pattern from options and returns the result", () => {
		const options = { pattern: [100, 50, 100] }
		const result = vibrationAPIRepository.vibrateWithOptions(options)
		expect(result).toBe(true)
		expect(globalThis.navigator.vibrate).toHaveBeenCalledWith(options.pattern)
	})

	it("cancels vibration by calling navigator.vibrate(0) and returns the result", () => {
		const result = vibrationAPIRepository.cancelVibration()
		expect(result).toBe(true)
		expect(globalThis.navigator.vibrate).toHaveBeenCalledWith(0)
	})
})
