import { beforeAll, describe, expect, it } from "vitest"
import { urlAPIMock } from "../../../../../@test/vitest/mocks"
import { URLAPIRepository } from "../../src/data/repositories"

describe("URLAPIRepository", () => {
	const urlTest = {
		url: "blob:http://localhost:3000/550e8400-e29b-41d4-a716-446655440000",
	}
	const urlRepository = new URLAPIRepository()
	const urlMock = urlAPIMock.createMock(urlTest.url)

	beforeAll(() => {
		urlAPIMock.implementMock(urlMock)
	})

	it("createObjectURL", async () => {
		const result = urlRepository.createObjectURL(new Blob())
		expect(result).toBe(urlTest.url)
	})
})
