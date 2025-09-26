import { beforeEach, describe, expect, it, vi } from "vitest"
import { windowLocalStorageMock } from "../../../../../@test/vitest/mocks"
import { LocalStorageRepository } from "../../src/data/repositories"

interface TestKeyValues {
	season: "winter" | "spring" | "summer" | "autumn"
	mood: "happy" | "sad"
}

describe("WindowLocalStorage", () => {
	const testData = {
		season: "winter",
		mood: "happy",
	}
	const localStorageRepository = new LocalStorageRepository<TestKeyValues>()
	const localStorageMock = windowLocalStorageMock.createMock(testData)

	beforeEach(() => {
		vi.clearAllMocks()

		windowLocalStorageMock.implementMock(localStorageMock)
	})

	it("should set an item", () => {
		localStorageRepository.setItem("season", "summer")

		expect(window.localStorage.setItem).toHaveBeenCalledWith("season", "summer")
	})

	it("should get an item", () => {
		const value = localStorageRepository.getItem("season")

		expect(value).toBe("winter")
		expect(window.localStorage.getItem).toHaveBeenCalledWith("season")
	})

	it("should remove an item", () => {
		localStorageRepository.removeItem("season")

		expect(window.localStorage.removeItem).toHaveBeenCalledWith("season")
	})

	it("should check if an item exists", () => {
		const exists = localStorageRepository.getItem("season") !== null

		expect(exists).toBe(true)
		expect(window.localStorage.getItem).toHaveBeenCalledWith("season")
	})
})
