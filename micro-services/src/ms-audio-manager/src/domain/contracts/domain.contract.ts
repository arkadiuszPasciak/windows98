export interface AudioManagerDomainContract {
	startRecording(): Promise<void>
	stopRecording(): Promise<File>
}
