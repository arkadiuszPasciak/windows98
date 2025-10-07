import { describe, expect, it } from "vitest"
import { BlobRepository } from "../../src/data/repositories/blob.repository"

describe("BlobRepository", () => {
	const blobRepository = new BlobRepository()

	it("should create a Blob instance from parts", () => {
		const result = blobRepository.create(["test"])
		expect(result).toBeInstanceOf(Blob)
		expect(result.size).toBe(4)
		expect(result.type).toBe("")
	})
})
