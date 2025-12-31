export interface DownloadFileStrategyContract {
	download(blob: Blob, filename: string): void
}
