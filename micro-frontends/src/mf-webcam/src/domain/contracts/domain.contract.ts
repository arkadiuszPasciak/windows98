import type { LoadingStateHelper, Maybe } from "@windows98/toolkit"

export interface WebcamDomainContract extends LoadingStateHelper {
	mediaStream: Maybe<MediaStream>

	generateMediaStream(): Promise<void>
}
