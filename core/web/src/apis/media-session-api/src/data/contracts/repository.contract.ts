import type { Maybe } from "@windows98/toolkit"

export interface MediaSessionAPIRepositoryContract {
	getMetadata(): Maybe<MediaMetadata>
	getPlaybackState(): MediaSessionPlaybackState
	setActionHandler(
		action: MediaSessionAction,
		handler: MediaSessionActionHandler | null,
	): void
	setCameraActive(active: boolean): Promise<void>
	setMicrophoneActive(active: boolean): Promise<void>
	setPositionState(state?: MediaPositionState | undefined): void
}
