import { beforeEach, describe, expect, it } from "vitest"
import { channelMessagingAPIMock } from "../../../../../@test/vitest/mocks"
import { ChannelMessagingAPIRepository } from "../../src/data/repositories"

describe("ChannelMessagingAPIRepository", () => {
	const channelMessagingRepository = new ChannelMessagingAPIRepository()

	beforeEach(() => {
		channelMessagingAPIMock.implementMock()
	})

	it("should create and return a MessageChannel instance", () => {
		const result = channelMessagingRepository.createMessageChannel()

		expect(result).toBeInstanceOf(MessageChannel)
	})
})
