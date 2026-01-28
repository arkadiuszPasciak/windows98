import { MSAudioManager, MSFileManager } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { SoundRecorderDomainContract } from "../contracts"
import type { RecorderState, SoundFile } from "../models"

export class SoundRecorderDomain implements SoundRecorderDomainContract {
	public recordingState: RecorderState = "idle"
	public recordedSoundFile: Maybe<SoundFile> = null

	private audioManager: typeof MSAudioManager
	private fileManager: typeof MSFileManager

	constructor() {
		makeAutoObservable(this)

		this.fileManager = MSFileManager
		this.audioManager = MSAudioManager
	}

	public async downloadRecordedSound(): Promise<void> {
		console.log("Downloading recorded sound...")
		console.log(this.recordedSoundFile)

		if (this.recordedSoundFile === null) return

		await this.fileManager.downloadFile(
			this.recordedSoundFile,
			"recorded-sound.wav",
		)
	}

	public async startRecording(): Promise<void> {
		this.recordingState = "recording"
		await this.audioManager.startRecording()
	}

	public async stopRecording(): Promise<void> {
		this.recordingState = "stopped"

		const audioFile = await this.audioManager.stopRecording()
		this.recordedSoundFile = audioFile
	}

	public reset(): void {
		this.recordingState = "idle"
		this.recordedSoundFile = null
	}
}

export const soundRecorderDomain = new SoundRecorderDomain()
