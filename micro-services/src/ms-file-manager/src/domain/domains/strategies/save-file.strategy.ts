import { CatchError } from "@windows98/toolkit"
import { URLAPI } from "@windows98/web"
import type { SaveFileStrategyContract } from "../../contracts"

export class SaveFileStrategy implements SaveFileStrategyContract {
	private urlAPI: URLAPI

	constructor() {
		this.urlAPI = new URLAPI()
	}

	@CatchError()
	public async save<FileType extends string>(
		content: string,
		filename: string,
		type: FileType,
	): Promise<void> {
		try {
			const blob = new Blob([content], { type })
			const link = document.createElement("a")
			link.href = this.urlAPI.createObjectURL(blob)
			link.download = filename

			document.body.appendChild(link)
			link.click()
			document.body.removeChild(link)
		} catch {
			throw new Error(`Error to save file ${filename}`)
		}
	}
}
