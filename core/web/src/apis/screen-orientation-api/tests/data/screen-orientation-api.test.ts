import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { screenOrientationAPIMock } from "../../../../../@test/vitest/mocks"
import { ScreenOrientationAPIRepository } from "../../src/data/repositories"

describe("ScreenOrientationAPIRepository", () => {
	let screenOrientationAPIRepository: ScreenOrientationAPIRepository

	afterEach(() => {
		screenOrientationAPIMock.reset()
	})

	beforeEach(() => {
		screenOrientationAPIRepository = new ScreenOrientationAPIRepository()
		screenOrientationAPIMock.implementMock()
	})

	it("reads orientation properties and state model", () => {
		expect(screenOrientationAPIRepository.type).toBe("portrait-primary")
		expect(screenOrientationAPIRepository.angle).toBe(0)

		const state = screenOrientationAPIRepository.getState()
		expect(state.type).toBe("portrait-primary")
		expect(state.angle).toBe(0)
		expect(state.isLocked).toBe(false)
		expect(state.lockedType).toBeUndefined()
	})

	it("delegates unlock", () => {
		screenOrientationAPIRepository.unlock()
		expect(window.screen.orientation.unlock).toHaveBeenCalled()
	})
})
