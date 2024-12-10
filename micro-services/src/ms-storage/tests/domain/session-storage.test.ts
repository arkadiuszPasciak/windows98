import { beforeEach, describe, expect, it, vi } from "vitest"
import { MSSessionStorage } from "../../src/domain/domains"

interface TestKeyValues {
	season: "winter" | "spring" | "summer" | "autumn"
	mood: "happy" | "sad"
}

describe("MSsessionStorage", () => {
	const storageDomain = new MSSessionStorage<TestKeyValues>()

	beforeEach(() => {
		Object.defineProperty(window, "sessionStorage", {
			value: {
				setItem: vi.fn(),
				getItem: vi.fn((key) => {
					const store: { [key: string]: string } = {
						season: "winter",
						mood: "happy",
					}
					return store[key] || null
				}),
				removeItem: vi.fn(),
				clear: vi.fn(),
			},
			writable: true,
		})
	})

	it("should set an item in sessionStorage", () => {
		storageDomain.set("season", "summer")

		expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
			"season",
			"summer",
		)
	})

	it("should get an item from sessionStorage", () => {
		const value = storageDomain.get("season")

		expect(value).toBe("winter")
		expect(window.sessionStorage.getItem).toHaveBeenCalledWith("season")
	})

	it("should remove an item from sessionStorage", () => {
		storageDomain.remove("season")

		expect(window.sessionStorage.removeItem).toHaveBeenCalledWith("season")
	})

	it("should check if an item exists in sessionStorage", () => {
		const exists = storageDomain.exists("season")

		expect(exists).toBe(true)
		expect(window.sessionStorage.getItem).toHaveBeenCalledWith("season")
	})
})
