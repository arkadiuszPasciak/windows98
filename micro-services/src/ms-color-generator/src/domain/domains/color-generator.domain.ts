import type {
	ColorConverterStrategyContract,
	ColorGeneratorDomainContract,
	RandomColorGeneratorStrategyContract,
} from "../contracts"
import type { Color } from "../models"
import {
	ColorConverterStrategy,
	RandomColorGeneratorStrategy,
} from "./strategies"

export class ColorGeneratorDomain implements ColorGeneratorDomainContract {
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

export const MSColorGenerator = new ColorGeneratorDomain()
