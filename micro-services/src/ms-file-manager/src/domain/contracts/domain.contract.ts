export interface FileManagerDomainContract {
	downloadFile(blob: Blob, filename: string): void
	openFile<SelectedFile extends string>(): Promise<SelectedFile>
	saveFile<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void>
}
