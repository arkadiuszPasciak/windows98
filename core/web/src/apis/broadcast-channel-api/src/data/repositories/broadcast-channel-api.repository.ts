import { CatchError } from "@windows98/toolkit"
import type { BroadcastChannelAPIRepositoryContract } from "../contracts"

export class BroadcastChannelAPIRepository
	implements BroadcastChannelAPIRepositoryContract
{
	@CatchError()
	public createBroadcastChannel(name: string): BroadcastChannel {
		if (!window.BroadcastChannel) {
			throw new Error(
				"Broadcast Channel API is not supported in this environment.",
			)
		}

		return new BroadcastChannel(name)
	}
}
