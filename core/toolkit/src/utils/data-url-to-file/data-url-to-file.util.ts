export function dataURLToFile(dataURL: string, fileName: string): File {
	const dataURLParts = dataURL.split(",")
	const mimeTypeMatch = dataURLParts[0].match(/:(.*?);/)
	const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : ""
	const base64Data = dataURLParts[1]
	const binaryString = atob(base64Data)
	const binaryStringLength = binaryString.length
	const byteArray = new Uint8Array(binaryStringLength)

	for (let index = 0; index < binaryStringLength; index++) {
		byteArray[index] = binaryString.charCodeAt(index)
	}

	return new File([byteArray], fileName, { type: mimeType })
}
