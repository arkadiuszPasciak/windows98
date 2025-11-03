import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { pageVisibilityAPIMock } from "../../../../../@test/vitest/mocks"
import { PageVisibilityAPIRepository } from "../../src/data/repositories"

describe("PageVisibilityAPIRepository", () => {
	let pageVisibilityRepository: PageVisibilityAPIRepository

	afterEach(() => {
		pageVisibilityAPIMock.reset()
	})

	beforeEach(() => {
		pageVisibilityRepository = new PageVisibilityAPIRepository()
	})

	it("reads visibility properties and state model", () => {
		expect(pageVisibilityRepository.visibilityState).toBe("visible")
		expect(pageVisibilityRepository.hidden).toBe(false)

		const state = pageVisibilityRepository.getState()
		expect(state.visibilityState).toBe("visible")
		expect(state.hidden).toBe(false)
		expect(typeof state.timestamp).toBe("number")
	})
})
