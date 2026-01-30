import type {
	ColorConverterStrategyContract,
	ColorManagerDomainContract,
	RandomColorGeneratorStrategyContract,
} from "../contracts"
import type { Color } from "../models"
import {
	ColorConverterStrategy,
	RandomColorGeneratorStrategy,
} from "./strategies"

export class ColorManagerDomain implements ColorManagerDomainContract {
	private colorConverterStrategy: ColorConverterStrategyContract
	private randomColorGeneratorStrategy: RandomColorGeneratorStrategyContract

	constructor(
		colorConverterStrategy?: ColorConverterStrategyContract,
		randomColorGeneratorStrategy?: RandomColorGeneratorStrategyContract,
	) {
		this.colorConverterStrategy =
			colorConverterStrategy || new ColorConverterStrategy()
		this.randomColorGeneratorStrategy =
			randomColorGeneratorStrategy || new RandomColorGeneratorStrategy()
	}

	public generateColor(): Color {
		const hex = this.randomColorGeneratorStrategy.generateRandomHex()
		const rgb = this.colorConverterStrategy.hexToRgb(hex)

		return {
			hex,
			rgb,
		}
	}
}

export const MSColorManager = new ColorManagerDomain()
