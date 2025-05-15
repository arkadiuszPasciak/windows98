import type { Maybe } from "@windows98/toolkit"

export interface SaveFileDomainContract<FileTypes extends string> {
	content: Maybe<string>
	fileName: Maybe<string>
	fileType: Maybe<FileTypes>

	saveFile(): Promise<void>
	setContent(content: string): void
	setFileName(fileName: string): void
	setFileType(fileType: FileTypes): void
}
