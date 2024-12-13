import type {
	TFileTextFileReader,
	TFileTextTypes,
} from "@APP/src/bundles/Window/FileBundle/Supports/File.supports"

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
