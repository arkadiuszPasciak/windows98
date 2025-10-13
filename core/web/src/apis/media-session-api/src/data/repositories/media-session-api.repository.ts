import { CatchError, type Maybe } from "@windows98/toolkit"
import type { MediaSessionAPIRepositoryContract } from "../contracts"

export class MediaSessionAPIRepository
	implements MediaSessionAPIRepositoryContract
{
	public getMetadata(): Maybe<MediaMetadata> {
		return window.navigator.mediaSession.metadata
	}

	@CatchError()
	public getPlaybackState(): MediaSessionPlaybackState {
		try {
			return window.navigator.mediaSession.playbackState
		} catch (error) {
			throw new Error(String(error))
		}
	}

	@CatchError()
	public setActionHandler(
		action: MediaSessionAction,
		handler: MediaSessionActionHandler | null,
	): void {
		try {
			window.navigator.mediaSession.setActionHandler(action, handler)
		} catch (error) {
			throw new Error(String(error))
		}
	}

	@CatchError()
	public async setCameraActive(active: boolean): Promise<void> {
		try {
			await window.navigator.mediaSession.setCameraActive(active)
		} catch (error) {
			throw new Error(String(error))
		}
	}

	@CatchError()
	public async setMicrophoneActive(active: boolean): Promise<void> {
		try {
			await window.navigator.mediaSession.setMicrophoneActive(active)
		} catch {
			throw new Error("Unable to set microphone active")
		}
	}

	@CatchError()
	public setPositionState(state: MediaPositionState): void {
		try {
			window.navigator.mediaSession.setPositionState(state)
		} catch {
			throw new Error("Unable to set position state")
		}
	}
}
