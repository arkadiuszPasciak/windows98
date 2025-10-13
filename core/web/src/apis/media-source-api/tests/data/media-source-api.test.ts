import { beforeAll, describe, expect, it } from "vitest"
import { mediaSourceAPIMock } from "../../../../../@test/vitest/mocks"
import { MediaSourceAPIRepository } from "../../src/data/repositories"

describe("MediaSourceAPIRepository", () => {
	const mediaSourceAPIRepository = new MediaSourceAPIRepository()

	beforeAll(() => {
		mediaSourceAPIMock.implementMock()
	})

	it("should create a new MediaSource", async () => {
		const mediaSource = await mediaSourceAPIRepository.createNewMediaSource()
		expect(mediaSource).toBeInstanceOf(MediaSource)
	})
})
