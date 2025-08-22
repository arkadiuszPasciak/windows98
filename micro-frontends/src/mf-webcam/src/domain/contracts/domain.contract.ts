import type { Maybe } from "@windows98/toolkit"

export interface WebcamDomainContract {
	mediaStream: Maybe<MediaStream>

	generateMediaStream(): Promise<void>
}
