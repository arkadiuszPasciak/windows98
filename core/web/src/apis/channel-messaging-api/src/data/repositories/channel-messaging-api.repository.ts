import { CatchError } from "@windows98/toolkit"
import type { ChannelMessagingAPIRepositoryContract } from "../contracts"

export class ChannelMessagingAPIRepository
	implements ChannelMessagingAPIRepositoryContract
{
	@CatchError()
	public createMessageChannel(): MessageChannel {
		if (!window.MessageChannel) {
			throw new Error(
				"Channel Messaging API is not supported in this environment.",
			)
		}

		return new MessageChannel()
	}
}
