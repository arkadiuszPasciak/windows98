import { beforeEach, describe, expect, it, vi } from "vitest"
import { windowSessionStorageMock } from "../../../../../@test/vitest/mocks"
import { SessionStorageRepository } from "../../src/data/repositories"

interface TestKeyValues {
	season: "winter" | "spring" | "summer" | "autumn"
	mood: "happy" | "sad"
}

describe("WindowLocalStorage", () => {
	const testData = {
		season: "winter",
		mood: "happy",
	}
	const sessionStorageRepository = new SessionStorageRepository<TestKeyValues>()
	const sessionStorageMock = windowSessionStorageMock.createMock(testData)

	beforeEach(() => {
		vi.clearAllMocks()

		windowSessionStorageMock.implementMock(sessionStorageMock)
	})

	it("should set an item", () => {
		sessionStorageRepository.setItem("season", "summer")

		expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
			"season",
			"summer",
		)
	})

	it("should get an item", () => {
		const value = sessionStorageRepository.getItem("season")

		expect(value).toBe("winter")
		expect(window.sessionStorage.getItem).toHaveBeenCalledWith("season")
	})

	it("should remove an item", () => {
		sessionStorageRepository.removeItem("season")

		expect(window.sessionStorage.removeItem).toHaveBeenCalledWith("season")
	})

	it("should check if an item exists", () => {
		const exists = sessionStorageRepository.getItem("season") !== null

		expect(exists).toBe(true)
		expect(window.sessionStorage.getItem).toHaveBeenCalledWith("season")
	})
})
