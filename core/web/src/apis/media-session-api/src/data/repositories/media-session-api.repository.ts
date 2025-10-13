import { CatchError, type Maybe } from "@windows98/toolkit"
import type { MediaSessionAPIRepositoryContract } from "../contracts"

export class MediaSessionAPIRepository
	implements MediaSessionAPIRepositoryContract
{
	public getMetadata(): Maybe<MediaMetadata> {
		this.assertAPISupported()

		return window.navigator.mediaSession.metadata
	}

	public getPlaybackState(): MediaSessionPlaybackState {
		this.assertAPISupported()

		return window.navigator.mediaSession.playbackState
	}

	public setActionHandler(
		action: MediaSessionAction,
		handler: MediaSessionActionHandler | null,
	): void {
		this.assertAPISupported()

		window.navigator.mediaSession.setActionHandler(action, handler)
	}

	public async setCameraActive(active: boolean): Promise<void> {
		this.assertAPISupported()

		await window.navigator.mediaSession.setCameraActive(active)
	}

	public async setMicrophoneActive(active: boolean): Promise<void> {
		this.assertAPISupported()

		await window.navigator.mediaSession.setMicrophoneActive(active)
	}

	public setPositionState(state: MediaPositionState): void {
		this.assertAPISupported()

		window.navigator.mediaSession.setPositionState(state)
	}

	@CatchError()
	private assertAPISupported(): void {
		if (!window.navigator.mediaSession) {
			throw new Error("MediaSessionAPI is not supported in the browser")
		}
	}
}
