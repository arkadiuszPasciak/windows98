import { beforeAll, describe, expect, it } from "vitest"
import { encodingAPIMock } from "../../../../../@test/vitest/mocks"
import { EncodingAPIRepository } from "../../src/data/repositories"

describe("EncodingAPIRepository", () => {
	const encodingRepository = new EncodingAPIRepository()

	beforeAll(() => {
		encodingAPIMock.implementMock()
	})

	it("should create a new TextDecoder", () => {
		const textDecoder = encodingRepository.createTextDecoder()

		expect(textDecoder).instanceOf(TextDecoder)
	})

	it("should create a new TextEncoder", () => {
		const textEncoder = encodingRepository.createTextEncoder()

		expect(textEncoder).instanceOf(TextEncoder)
	})

	it("should create a new createTextDecoderStream", () => {
		const textDecoderStream = encodingRepository.createTextDecoderStream()

		expect(textDecoderStream).instanceOf(TextDecoderStream)
	})

	it("should create a new createTextEncoderStream", () => {
		const textEncoderStream = encodingRepository.createTextEncoderStream()

		expect(textEncoderStream).instanceOf(TextEncoderStream)
	})
})
