export interface MediaStreamRecordingAPIContract {
	createMediaRecorder(
		stream: MediaStream,
		options?: MediaRecorderOptions,
	): MediaRecorder
}
