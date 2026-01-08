export async function fileToCanvas(file: File): Promise<HTMLCanvasElement> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()

		reader.onload = (event) => {
			const image = new Image()

			image.onload = () => {
				const canvas = document.createElement("canvas")
				const context = canvas.getContext("2d")

				if (!context) {
					reject(
						new Error("Failed to get 2D rendering context from canvas element"),
					)
					return
				}

				canvas.width = image.width
				canvas.height = image.height

				context.drawImage(image, 0, 0)

				resolve(canvas)
			}
			image.onerror = (error) => reject(error)
			image.src = event.target?.result as string
		}

		reader.onerror = (error) => reject(error)
		reader.readAsDataURL(file)
	})
}
