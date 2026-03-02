import type {
	ColorManagerDomainContract,
	ConverterStrategyContract,
	GeneratorStrategyContract,
	ValidatorStrategyContract,
} from "../contracts"
import type { ColorType, ColorTypeMap, HexColor, RgbColor } from "../models"
import {
	ConverterStrategy,
	GeneratorStrategy,
	ValidatorStrategy,
} from "./strategies"

export class ColorManagerDomain implements ColorManagerDomainContract {
	private colorConverterStrategy: ConverterStrategyContract
	private generatorStrategy: GeneratorStrategyContract
	private validatorStrategy: ValidatorStrategyContract

	constructor(
		colorConverterStrategy: ConverterStrategyContract,
		generatorStrategy: GeneratorStrategyContract,
		validatorStrategy: ValidatorStrategyContract,
	) {
		this.colorConverterStrategy = colorConverterStrategy
		this.generatorStrategy = generatorStrategy
		this.validatorStrategy = validatorStrategy
	}

	public generateColor(): { rgb: RgbColor; hex: HexColor } {
		const hex = this.generatorStrategy.generate("hex")
		const rgb = this.colorConverterStrategy.convert("hex", hex, "rgb")

		return { rgb, hex }
	}

	public validateColor<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): boolean {
		return this.validatorStrategy.validate(type, value)
	}
}

export const MSColorManager = new ColorManagerDomain(
	new ConverterStrategy(),
	new GeneratorStrategy(),
	new ValidatorStrategy(),
)
