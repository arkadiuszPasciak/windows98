import type { Maybe } from "@windows98/toolkit"
import { vi } from "vitest"

class MediaSessionAPIMock {
	public createMock(
		metadata: Maybe<MediaMetadata> = null,
		playbackState: MediaSessionPlaybackState = "none",
	) {
		return {
			metadata,
			playbackState,
			setActionHandler: vi.fn(),
			setCameraActive: vi.fn(),
			setMicrophoneActive: vi.fn(),
			setPositionState: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(),
		} as unknown as MediaSession
	}

	public implementMock(mediaSessionMock: MediaSession) {
		vi.stubGlobal("navigator", {
			mediaSession: mediaSessionMock,
		})
	}
}

export const mediaSessionAPIMock = new MediaSessionAPIMock()
