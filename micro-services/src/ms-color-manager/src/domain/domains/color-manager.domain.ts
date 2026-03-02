import type {
	ColorManagerDomainContract,
	ConverterStrategyContract,
	GeneratorStrategyContract,
	ValidatorStrategyContract,
} from "../contracts"
import type {
	CmykColor,
	ColorType,
	ColorTypeMap,
	HexColor,
	HslColor,
	HsvColor,
	RgbColor,
} from "../models"
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

	public generateColor(): {
		cmyk: CmykColor
		hex: HexColor
		hsl: HslColor
		hsv: HsvColor
		rgb: RgbColor
	} {
		const hex = this.generatorStrategy.generate("hex")
		const rgb = this.colorConverterStrategy.convert("hex", hex, "rgb")
		const cmyk = this.colorConverterStrategy.convert("hex", hex, "cmyk")
		const hsl = this.colorConverterStrategy.convert("hex", hex, "hsl")
		const hsv = this.colorConverterStrategy.convert("hex", hex, "hsv")

		return { cmyk, hex, hsl, hsv, rgb }
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
