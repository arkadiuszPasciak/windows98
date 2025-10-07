import { beforeAll, describe, expect, it } from "vitest"
import { cookieStoreAPIMock } from "../../../../../@test/vitest/mocks"
import { CookieStoreAPIRepository } from "../../src/data/repositories"

describe("CookieStoreAPIRepository", () => {
	const cookieStoreRepository = new CookieStoreAPIRepository()
	const cookieStoreMock = cookieStoreAPIMock.createMock()

	beforeAll(() => {
		cookieStoreAPIMock.implementMock(cookieStoreMock)
	})

	it("should set a cookie", async () => {
		await cookieStoreRepository.set("test", "value")
		const result = await cookieStoreRepository.get("test")
		expect(result).toEqual({ name: "test", value: "value" })
	})

	it("should get all cookies", async () => {
		await cookieStoreRepository.set("foo", "bar")
		await cookieStoreRepository.set("baz", "qux")
		const all = await cookieStoreRepository.getAll()
		expect(all).toEqual([
			{ name: "test", value: "value" },
			{ name: "foo", value: "bar" },
			{ name: "baz", value: "qux" },
		])
	})

	it("should delete a cookie", async () => {
		await cookieStoreRepository.delete("foo")
		const all = await cookieStoreRepository.getAll()
		expect(all).not.toContainEqual({ name: "foo", value: "bar" })
	})

	it("should throw when getting a non-existent cookie", async () => {
		await expect(cookieStoreRepository.get("notfound")).rejects.toThrow(
			"Cookie with id 'notfound' not found",
		)
	})
})
