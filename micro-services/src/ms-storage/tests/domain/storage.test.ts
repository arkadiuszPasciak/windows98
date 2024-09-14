import { beforeEach, describe, expect, it, vi } from "vitest"
import { StorageDomain } from "../../src/domain/domains"

describe("StorageDomain", () => {
	const storageDomain: StorageDomain<string, string> = new StorageDomain()

	beforeEach(() => {
		Object.defineProperty(window, "localStorage", {
			value: {
				setItem: vi.fn(),
				getItem: vi.fn((key) => {
					const store: { [key: string]: string } = {
						key1: "value1",
					}
					return store[key] || null
				}),
				removeItem: vi.fn(),
				clear: vi.fn(),
			},
			writable: true,
		})
	})

	it("should add an item in localStorage", () => {
		storageDomain.addItem("key2", "value2")

		expect(window.localStorage.setItem).toHaveBeenCalledWith("key2", "value2")
	})

	it("should get an item from localStorage", () => {
		const value = storageDomain.getItem("key1")

		expect(value).toBe("value1")
		expect(window.localStorage.getItem).toHaveBeenCalledWith("key1")
	})

	it("should remove an item from localStorage", () => {
		storageDomain.removeItem("key1")

		expect(window.localStorage.removeItem).toHaveBeenCalledWith("key1")
	})

	it("should check if an item exists in localStorage", () => {
		const exists = storageDomain.isItemExist("key1")

		expect(exists).toBe(true)
		expect(window.localStorage.getItem).toHaveBeenCalledWith("key1")
	})

	it("should update an item in localStorage", () => {
		storageDomain.updateItem("key1", "newValue")

		expect(window.localStorage.setItem).toHaveBeenCalledWith("key1", "newValue")
	})
})
