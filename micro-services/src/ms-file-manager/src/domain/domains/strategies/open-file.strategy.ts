import { CatchError } from "@windows98/toolkit"
import type { OpenFileStrategyContract } from "../../contracts"

export class OpenFileStrategy implements OpenFileStrategyContract {
	@CatchError()
	public async open<SelectedFile extends string>(): Promise<SelectedFile> {
		return new Promise((resolve, reject) => {
			const input = document.createElement("input")
			input.type = "file"

			input.onchange = async (event: Event) => {
				const target = event.target as HTMLInputElement
				if (!target.files || target.files.length === 0) {
					reject(new Error("No file selected"))
					return
				}

				const file = target.files[0]
				const contents = (await file.text()) as SelectedFile
				resolve(contents)
			}

			input.click()
		})
	}
}
