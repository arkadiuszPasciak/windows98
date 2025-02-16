import type { ENotepadText } from "../models"

export interface NotepadDomainContract {
	text: string

	saveFile(fileName: string, textType: ENotepadText): Promise<void>
	openFile(): Promise<void>
}
