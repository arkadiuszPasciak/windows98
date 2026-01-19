import type {
	AudioManagerDomainContract,
	RecordingStrategyContract,
} from "../contracts"
import { RecordingStrategy } from "./strategies"

class AudioManagerDomain implements AudioManagerDomainContract {
	private recordingStrategy: RecordingStrategyContract

	constructor() {
		this.recordingStrategy = new RecordingStrategy()
	}

	public async startRecording(): Promise<void> {
		await this.recordingStrategy.start()
	}

	public async stopRecording(): Promise<File> {
		return await this.recordingStrategy.stop()
	}
}

export const MSAudioManager = new AudioManagerDomain()
