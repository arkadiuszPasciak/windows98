import { CatchError } from "@windows98/toolkit"
import type { MediaCapabilitiesAPIRepositoryContract } from "../contracts"

export class MediaCapabilitiesAPIRepository
	implements MediaCapabilitiesAPIRepositoryContract
{
	@CatchError()
	public async decodingInfo(
		configuration: MediaDecodingConfiguration,
	): Promise<MediaCapabilitiesDecodingInfo> {
		try {
			return await window.navigator.mediaCapabilities.decodingInfo(
				configuration,
			)
		} catch (error) {
			throw new Error("Error fetching decoding info:", { cause: error })
		}
	}

	@CatchError()
	public async encodingInfo(
		configuration: MediaEncodingConfiguration,
	): Promise<MediaCapabilitiesEncodingInfo> {
		try {
			return await window.navigator.mediaCapabilities.encodingInfo(
				configuration,
			)
		} catch (error) {
			throw new Error("Error fetching encoding info:", { cause: error })
		}
	}
}
