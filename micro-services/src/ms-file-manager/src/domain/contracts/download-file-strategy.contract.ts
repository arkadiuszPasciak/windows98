export interface DownloadFileStrategyContract {
	download(file: File, filename: string): Promise<void>
}
