import type { MediaSourceAPIRepositoryContract } from "../contracts"

export class MediaSourceAPIRepository
	implements MediaSourceAPIRepositoryContract
{
	public createNewMediaSource(): MediaSource {
		return new MediaSource()
	}
}
