export interface ClipboardDomainContract {
	copyText(text: string): Promise<void>
	pasteText(): Promise<string>
}
