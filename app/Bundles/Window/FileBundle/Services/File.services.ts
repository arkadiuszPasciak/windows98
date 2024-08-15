import type {
	IFilesElements,
	TFileTextFileReader,
	TFileTextTypes,
} from "@APP|Bundles/FileBundle/Supports/File.supports"

export function saveFileOnUserDisk(
	content: string,
	filename: string,
	type: TFileTextTypes,
): void {
	const blob = new Blob([content], { type }) as Blob
	const link = document.createElement("a") as HTMLAnchorElement

	link.href = window.URL.createObjectURL(blob)
	link.setAttribute("download", filename)
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
}

export async function openTextFileFromUserDisk(
	event: Event,
): Promise<TFileTextFileReader> {
	if (!event) {
		return null
	}

	const target = event.target as HTMLInputElement

	if (!target) {
		return null
	}

	const file: File = (target.files as FileList)[0]

	if (!file) {
		return null
	}

	const promise = new Promise((resolve) => {
		const reader = new FileReader() as FileReader

		reader.onload = (): void => {
			resolve(reader.result)
		}

		reader.readAsText(file)
	}) as Promise<TFileTextFileReader>

	let result = null as TFileTextFileReader

	await promise.then((value: TFileTextFileReader) => {
		result = value
	})

	return result ?? null
}

export class FileSaveComponentTesting {
	public elements: IFilesElements

	constructor() {
		this.elements = {
			labelFileSaveName: '[data-test="ui-input-label-file-save-name"]',
			labelFileTypes: '[data-test="ui-select-label-file-types"]',
			selectTypeFile: '[data-test="ui-select-file-types"]',
			optionSelected: '[data-test="ui-select-file-types"] > option:selected',
		}
	}

	public checkLabels(): void {
		cy.get(this.elements.labelFileSaveName).should("have.text", "File name:")

		cy.get(this.elements.labelFileTypes).should("have.text", "Save as type:")
	}

	public changeSelectAndCheckOptionSelected(name: string): void {
		cy.get(this.elements.selectTypeFile).select(name)

		cy.get(this.elements.optionSelected).should("have.text", name)
	}
}
