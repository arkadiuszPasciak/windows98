import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { SaveFileStrategyContract } from "../../contracts"

export class SaveFileStrategy implements SaveFileStrategyContract {
	@MSErrorHandler.CatchError("SaveFileStrategy", "saveFile")
	public async save<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void> {
		try {
			const blob = new Blob([content], { type })
			const link = document.createElement("a")
			link.href = URL.createObjectURL(blob)
			link.download = filename

			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		} catch {
			throw new Error(`Error to save file ${filename}`)
		}
	}
}
