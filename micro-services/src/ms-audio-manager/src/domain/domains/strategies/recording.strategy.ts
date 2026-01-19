import { CatchError, type Maybe } from "@windows98/toolkit"
import {
	MediaCaptureAndStreamsAPI,
	MediaStreamRecordingAPI,
} from "@windows98/web"
import type { RecordingStrategyContract } from "../../contracts"

export class RecordingStrategy implements RecordingStrategyContract {
	private mediaCaptureAndStreamsAPI: MediaCaptureAndStreamsAPI
	private mediaStreamRecordingAPI: MediaStreamRecordingAPI
	private mediaRecorder: Maybe<MediaRecorder> = null
	private audioChunks: Blob[] = []

	constructor() {
		this.mediaCaptureAndStreamsAPI = new MediaCaptureAndStreamsAPI()
		this.mediaStreamRecordingAPI = new MediaStreamRecordingAPI()
	}

	@CatchError()
	public async start(): Promise<void> {
		try {
			const mediaDevices =
				this.mediaCaptureAndStreamsAPI.createNewMediaDevices()
			const stream = await mediaDevices.getUserMedia({ audio: true })
			this.audioChunks = []

			this.mediaRecorder =
				this.mediaStreamRecordingAPI.createMediaRecorder(stream)

			this.mediaRecorder.ondataavailable = (event) => {
				this.audioChunks.push(event.data)
			}

			this.mediaRecorder.start()
		} catch (error) {
			console.error("Error starting recording:", error)
			throw error
		}
	}

	@CatchError()
	public async stop(): Promise<File> {
		return new Promise((resolve) => {
			if (!this.mediaRecorder) {
				throw new Error("Recording not started.")
			}

			this.mediaRecorder.onstop = () => {
				const audioBlob = new File(this.audioChunks, "recording.webm", {
					type: "audio/webm",
				})
				resolve(audioBlob)
			}

			this.mediaRecorder.stop()
		})
	}
}
