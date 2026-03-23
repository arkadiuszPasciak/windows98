import { MSClipboard, MSColorManager } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { ColorGeneratorDomainContract } from "../contracts"
import type { ColorState, ColorType, FormattedColorState } from "../models"

export class ColorGeneratorDomain implements ColorGeneratorDomainContract {
	private msColorManager = MSColorManager
	public currentColor: ColorState = {
		cmyk: { c: 0, m: 0, y: 0, k: 0 },
		hex: "#000000",
		hsl: { h: 0, s: 0, l: 0 },
		hsv: { h: 0, s: 0, v: 0 },
		rgb: { r: 0, g: 0, b: 0 },
	}
	public formattedColor: FormattedColorState = {
		cmyk: "cmyk(0%, 0%, 0%, 0%)",
		hex: "#000000",
		hsl: "hsl(0, 0%, 0%)",
		hsv: "hsv(0, 0%, 0%)",
		rgb: "rgb(0, 0, 0)",
	}

	constructor() {
		makeAutoObservable(this)
	}

	public copyColor = async (type: ColorType): Promise<void> => {
		await MSClipboard.copyText(this.formattedColor[type])
	}

	public generateRandomColor(): void {
		const newColor = this.msColorManager.generateColor()

		this.updateCurrentColor(newColor)
		this.updateFormattedColor(newColor)
	}

	private updateCurrentColor(color: ColorState): void {
		this.currentColor = {
			cmyk: color.cmyk,
			hsl: color.hsl,
			hsv: color.hsv,
			rgb: color.rgb,
			hex: color.hex,
		}
	}

	private updateFormattedColor(color: ColorState): void {
		this.formattedColor = {
			cmyk: this.msColorManager.formatColor("cmyk", color.cmyk),
			hsl: this.msColorManager.formatColor("hsl", color.hsl),
			hsv: this.msColorManager.formatColor("hsv", color.hsv),
			rgb: this.msColorManager.formatColor("rgb", color.rgb),
			hex: this.msColorManager.formatColor("hex", color.hex),
		}
	}
}

export const colorGeneratorDomain = new ColorGeneratorDomain()
