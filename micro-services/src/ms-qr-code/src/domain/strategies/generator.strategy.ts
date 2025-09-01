import { CatchError } from "@windows98/toolkit"
import type { GeneratorStrategyContract } from "../contracts"
import type { QRCodeSize } from "../models"

export class GeneratorStrategy implements GeneratorStrategyContract {
	public generate(content: string, size: QRCodeSize): HTMLCanvasElement {
		const [width, height] = this.parseSize(size)
		const canvas = this.summonCanvas(width, height)
		const matrix = this.encodeBasicQR(content)
		this.paintMatrix(canvas, matrix, width, height)
		return canvas
	}

	private parseSize(size: QRCodeSize): [number, number] {
		const [width, height] = size.split("x").map(Number)
		return [width, height]
	}

	private summonCanvas(width: number, height: number): HTMLCanvasElement {
		const canvas = document.createElement("canvas")
		canvas.width = width
		canvas.height = height
		return canvas
	}

	private encodeBasicQR(content: string): number[][] {
		const matrixSize = 21
		const matrix = Array.from({ length: matrixSize }, () =>
			Array(matrixSize).fill(0),
		)

		this.drawFinder(matrix, 0, 0)
		this.drawFinder(matrix, matrixSize - 7, 0)
		this.drawFinder(matrix, 0, matrixSize - 7)

		const binary = Array.from(content)
			.map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
			.join("")

		const isInFinder = (x: number, y: number) => {
			const inTopLeft = x < 7 && y < 7
			const inTopRight = x >= matrixSize - 7 && y < 7
			const inBottomLeft = x < 7 && y >= matrixSize - 7
			return inTopLeft || inTopRight || inBottomLeft
		}

		let bitIndex = 0
		for (let y = 0; y < matrixSize; y++) {
			for (let x = 0; x < matrixSize; x++) {
				if (isInFinder(x, y)) continue
				if (bitIndex < binary.length) {
					matrix[y][x] = binary[bitIndex] === "1" ? 1 : 0
					bitIndex++
				}
			}
		}

		return matrix
	}

	private drawFinder(matrix: number[][], offsetX: number, offsetY: number) {
		for (let positionX = 0; positionX < 7; positionX++) {
			for (let positionY = 0; positionY < 7; positionY++) {
				const isBorder =
					positionX === 0 ||
					positionX === 6 ||
					positionY === 0 ||
					positionY === 6
				const isCenter =
					positionX >= 2 && positionX <= 4 && positionY >= 2 && positionY <= 4
				matrix[offsetY + positionY][offsetX + positionX] =
					isBorder || isCenter ? 1 : 0
			}
		}
	}

	@CatchError()
	private paintMatrix(
		canvas: HTMLCanvasElement,
		matrix: number[][],
		width: number,
		height: number,
	) {
		const context = canvas.getContext("2d")

		if (!context) {
			throw new Error("Failed to get canvas context")
		}

		const cellWidth = width / matrix.length
		const cellHeight = height / matrix.length
		context.fillStyle = "#fff"
		context.fillRect(0, 0, width, height)
		context.fillStyle = "#000"

		for (let positionY = 0; positionY < matrix.length; positionY++) {
			for (let positionX = 0; positionX < matrix.length; positionX++) {
				if (matrix[positionY][positionX]) {
					context.fillRect(
						positionX * cellWidth,
						positionY * cellHeight,
						cellWidth,
						cellHeight,
					)
				}
			}
		}
	}
}
