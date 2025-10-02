import { webStorageAPIMock } from "@windows98/web/mocks"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { StorageDomain } from "../../src/domain/domains"

interface TestKeyValues {
	season: "winter" | "spring" | "summer" | "autumn"
	mood: "happy" | "sad"
}

describe("MSStorage", () => {
	const testData = {
		season: "winter",
		mood: "happy",
	}
	const storageDomain = new StorageDomain<TestKeyValues>()
	const storageMock = webStorageAPIMock.createMock(testData)

	beforeEach(() => {
		vi.clearAllMocks()
		webStorageAPIMock.implementMock("localStorage", storageMock)
	})

	it("should set an item", () => {
		storageDomain.set("season", "summer")
		expect(window.localStorage.setItem).toHaveBeenCalledWith("season", "summer")
	})

	it("should get an item", () => {
		const value = storageDomain.get("season")
		expect(value).toBe("summer")
		expect(window.localStorage.getItem).toHaveBeenCalledWith("season")
	})

	it("should check if an item exists", () => {
		const isSeasonExists = storageDomain.exists("season")
		expect(isSeasonExists).toBe(true)
		expect(window.localStorage.getItem).toHaveBeenCalledWith("season")
	})

	it("should remove an item", () => {
		storageDomain.remove("season")
		expect(window.localStorage.removeItem).toHaveBeenCalledWith("season")
	})
})
