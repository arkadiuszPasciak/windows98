import type {
	ColorManagerDomainContract,
	ConverterStrategyContract,
	RandomColorGeneratorStrategyContract,
	ValidatorStrategyContract,
} from "../contracts"
import type { ColorType, ColorValue, HexColor, RgbColor } from "../models"
import {
	ConverterStrategy,
	RandomColorGeneratorStrategy,
	ValidatorStrategy,
} from "./strategies"

export class ColorManagerDomain implements ColorManagerDomainContract {
	private colorConverterStrategy: ConverterStrategyContract
	private randomColorGeneratorStrategy: RandomColorGeneratorStrategyContract
	private validatorStrategy: ValidatorStrategyContract

	constructor(
		colorConverterStrategy: ConverterStrategyContract,
		randomColorGeneratorStrategy: RandomColorGeneratorStrategyContract,
		validatorStrategy: ValidatorStrategyContract,
	) {
		this.colorConverterStrategy = colorConverterStrategy
		this.randomColorGeneratorStrategy = randomColorGeneratorStrategy
		this.validatorStrategy = validatorStrategy
	}

	public generateColor(): { rgb: RgbColor; hex: HexColor } {
		const hex = this.randomColorGeneratorStrategy.generateRandomHex()
		const rgb = this.colorConverterStrategy.convert("hex", hex, "rgb")

		return { rgb: rgb as RgbColor, hex: hex as HexColor }
	}

	public validateColor(type: ColorType, value: ColorValue): boolean {
		return this.validatorStrategy.validate(type, value)
	}
}

export const MSColorManager = new ColorManagerDomain(
	new ConverterStrategy(),
	new RandomColorGeneratorStrategy(),
	new ValidatorStrategy(),
)
