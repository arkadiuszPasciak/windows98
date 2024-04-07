import { beforeEach, expect, it, describe, vi } from "vitest"
import { DatabaseService } from "../../src/domain/services/database.service"

describe("[MicroServices]<Database>(DatabaseService)", () => {
	let databaseService: DatabaseService

	beforeEach(async () => {
		vi.stubGlobal("indexedDB", {
			open: vi.fn().mockImplementation(() => {
				const request = {
					onerror: null,
					onsuccess: null,
					onupgradeneeded: null,
					result: {
						createObjectStore: vi.fn(),
						transaction: vi.fn().mockReturnValue({
							objectStore: vi.fn().mockReturnValue({
								add: vi.fn(),
								get: vi.fn(),
								put: vi.fn(),
								delete: vi.fn()
							})
						})
					}
				}

				setTimeout(() => {
					if (request.onsuccess) {
						// eslint-disable-next-line @typescript-eslint/ban-ts-comment
						// @ts-ignore
						request.onsuccess()
					}
				}, 0)

				return request
			}),
			deleteDatabase: vi.fn(),
			cmp: vi.fn(),
			databases: vi.fn()
		})

		databaseService = new DatabaseService("databaseName", "storeName")

		await databaseService.open()
	})

	it("open()", async () => {
		const openSpy = vi.spyOn(databaseService["databaseRepository"], "open")

		await databaseService.open()

		expect(openSpy).toHaveBeenCalled()
	})

	it("add()", async () => {
		const item = { id: 1, name: "Item 1" }
		const addSpy = vi.spyOn(databaseService["databaseRepository"], "add")

		await databaseService.add(item)

		expect(addSpy).toHaveBeenCalledWith(item)
	})

	it("get()", async () => {
		const key = 1
		const getSpy = vi.spyOn(databaseService["databaseRepository"], "get")

		await databaseService.get(key)

		expect(getSpy).toHaveBeenCalledWith(key)
	})

	it("update()", async () => {
		const key = 1
		const item = { id: 1, name: "Updated Item 1" }
		const updateSpy = vi.spyOn(databaseService["databaseRepository"], "update")

		await databaseService.update(key, item)

		expect(updateSpy).toHaveBeenCalledWith(key, item)
	})

	it("delete()", async () => {
		const key = 1
		const deleteSpy = vi.spyOn(databaseService["databaseRepository"], "delete")

		await databaseService.delete(key)

		expect(deleteSpy).toHaveBeenCalledWith(key)
	})
})
