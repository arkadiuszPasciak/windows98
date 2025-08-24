import type { Maybe } from "@windows98/toolkit"

export interface SnapshotDomainContract {
	snapshotUrl: Maybe<string>

	getSnapshot(videoElement: HTMLVideoElement): Promise<void>
}
