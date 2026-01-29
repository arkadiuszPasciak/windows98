import type { Maybe } from "@windows98/toolkit"
import type { RecorderState, SoundFile } from "../models"

export interface SoundRecorderDomainContract {
	recordingState: RecorderState
	recordedSoundFile: Maybe<SoundFile>

	downloadRecordedSound(): Promise<void>
	startRecording(): Promise<void>
	stopRecording(): Promise<void>
	reset(): void
}
