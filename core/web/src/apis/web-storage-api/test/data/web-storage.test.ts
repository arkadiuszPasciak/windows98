import { beforeEach, describe, expect, it, vi } from "vitest"
import { webStorageAPIMock } from "../../../../../@test/vitest/mocks"
import { WebStorageRepositoryAPI } from "../../src/data/repositories"

interface TestKeyValues {
	season: "winter" | "spring" | "summer" | "autumn"
	mood: "happy" | "sad"
}

type WebStorageRepositoryAPIFields =
	keyof WebStorageRepositoryAPI<TestKeyValues>
const storages: WebStorageRepositoryAPIFields[] = [
	"localStorage",
	"sessionStorage",
]

for (const storage of storages) {
	describe(`WebStorageRepositoryAPI:${storage}`, () => {
		const testData = {
			season: "winter",
			mood: "happy",
		}
		const webStorageRepository = new WebStorageRepositoryAPI<TestKeyValues>()
		const storageMock = webStorageAPIMock.createMock(testData)

		beforeEach(() => {
			vi.clearAllMocks()
			webStorageAPIMock.implementMock(storage, storageMock)
		})

		it("should set an item", () => {
			webStorageRepository[storage].setItem("season", "summer")
			expect(window[storage].setItem).toHaveBeenCalledWith("season", "summer")
		})

		it("should get an item", () => {
			const value = webStorageRepository[storage].getItem("season")
			expect(value).toBe("summer")
			expect(window[storage].getItem).toHaveBeenCalledWith("season")
		})

		it("should remove an item", () => {
			webStorageRepository[storage].removeItem("season")
			expect(window[storage].removeItem).toHaveBeenCalledWith("season")
		})

		it("should check if an item exists", () => {
			const isSeasonExists = webStorageRepository[storage].getItem("season")
			expect(isSeasonExists).toBe(null)
			expect(window[storage].getItem).toHaveBeenCalledWith("season")
		})
	})
}
