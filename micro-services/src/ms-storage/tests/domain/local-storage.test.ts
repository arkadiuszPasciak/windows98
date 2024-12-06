import { beforeEach, describe, expect, it, vi } from "vitest"
import { MSLocalStorage } from "../../src/domain/domains"

interface TestKeyValues {
	season: "winter" | "spring" | "summer" | "autumn"
	mood: "happy" | "sad"
}

describe("MSLocalStorage", () => {
	const storageDomain = new MSLocalStorage<TestKeyValues>()

	beforeEach(() => {
		Object.defineProperty(window, "localStorage", {
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

	it("should set an item in localStorage", () => {
		storageDomain.set("season", "summer")

		expect(window.localStorage.setItem).toHaveBeenCalledWith("season", "summer")
	})

	it("should get an item from localStorage", () => {
		const value = storageDomain.get("season")

		expect(value).toBe("winter")
		expect(window.localStorage.getItem).toHaveBeenCalledWith("season")
	})

	it("should remove an item from localStorage", () => {
		storageDomain.remove("season")

		expect(window.localStorage.removeItem).toHaveBeenCalledWith("season")
	})

	it("should check if an item exists in localStorage", () => {
		const exists = storageDomain.exists("season")

		expect(exists).toBe(true)
		expect(window.localStorage.getItem).toHaveBeenCalledWith("season")
	})
})
