export interface RecordingStrategyContract {
	start(): Promise<void>
	stop(): Promise<File>
}
