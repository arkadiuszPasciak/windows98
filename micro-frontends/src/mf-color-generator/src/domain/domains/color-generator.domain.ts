import { MSClipboard, MSColorGenerator } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { ColorGeneratorDomainContract } from "../contracts"
import type { ColorState } from "../models"

export class ColorGeneratorDomain implements ColorGeneratorDomainContract {
	private msColorGenerator: typeof MSColorGenerator
	public currentColor: ColorState

	public copyHexColor = async (): Promise<void> => {
		await MSClipboard.copyText(this.currentColor.hex)
	}

	public copyRgbColor = async (): Promise<void> => {
		const { r, g, b } = this.currentColor.rgb
		const rgbString = `rgb(${r}, ${g}, ${b})`
		await MSClipboard.copyText(rgbString)
	}

	constructor() {
		makeAutoObservable(this)

		this.msColorGenerator = MSColorGenerator
		this.currentColor = {
			rgb: { r: 0, g: 0, b: 0 },
			hex: "#000000",
		}

		this.generateRandomColor()
	}

	public generateRandomColor(): void {
		const newColor = this.msColorGenerator.generateColor()
		this.updateCurrentColor(newColor)
	}

	private updateCurrentColor(color: {
		rgb: { r: number; g: number; b: number }
		hex: string
	}): void {
		this.currentColor = {
			rgb: color.rgb,
			hex: color.hex,
		}
	}
}

export const colorGeneratorDomain = new ColorGeneratorDomain()
