export interface ClipboardAPIRepositoryContract {
	writeText(text: string): Promise<void>
	readText(): Promise<string>
}
