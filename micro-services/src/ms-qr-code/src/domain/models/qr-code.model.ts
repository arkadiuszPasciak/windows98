// It was copied from the library and create as a model because there is no export - qrcode-generator/dist/qrcode.d.ts
export interface QRCode {
	addData(data: string, mode?: Mode): void
	make(): void
	getModuleCount(): number
	isDark(row: number, col: number): boolean
	createImgTag(cellSize?: number, margin?: number): string
	createSvgTag(cellSize?: number, margin?: number): string
	createSvgTag(opts?: {
		cellSize?: number
		margin?: number
		scalable?: boolean
	}): string
	createDataURL(cellSize?: number, margin?: number): string
	createTableTag(cellSize?: number, margin?: number): string
	createASCII(cellSize?: number, margin?: number): string
	renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void
}
