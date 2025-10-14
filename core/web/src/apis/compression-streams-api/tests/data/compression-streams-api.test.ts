import { beforeAll, describe, expect, it } from "vitest"
import { compressionStreamsAPIMock } from "../../../../../@test/vitest/mocks"
import { CompressionStreamsAPIRepository } from "../../src/data/repositories"

describe("CompressionStreamsAPIRepository", () => {
	const compressionStreamsRepository = new CompressionStreamsAPIRepository()

	beforeAll(() => {
		compressionStreamsAPIMock.implementMock()
	})

	it("should create a new CompressionStream", () => {
		const compressionStream =
			compressionStreamsRepository.createCompressionStream("gzip")

		expect(compressionStream).instanceOf(CompressionStream)
	})

	it("should create a new DecompressionStream", () => {
		const decompressionStream =
			compressionStreamsRepository.createDecompressionStream("gzip")

		expect(decompressionStream).instanceOf(DecompressionStream)
	})
})
