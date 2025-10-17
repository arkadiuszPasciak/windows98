import type { MediaStreamRecordingAPIContract } from "../contracts"

export class MediaStreamRecordingAPIRepository
	implements MediaStreamRecordingAPIContract
{
	public createMediaRecorder(
		stream: MediaStream,
		options?: MediaRecorderOptions,
	): MediaRecorder {
		return new MediaRecorder(stream, options)
	}
}
