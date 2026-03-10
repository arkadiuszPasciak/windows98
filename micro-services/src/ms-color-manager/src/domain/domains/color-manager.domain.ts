import type {
	ColorManagerDomainContract,
	ConverterStrategyContract,
	FormatterStrategyContract,
	GeneratorStrategyContract,
	ValidatorStrategyContract,
} from "../contracts"
import type { ColorType, ColorTypeMap } from "../models"
import {
	ConverterStrategy,
	FormatterStrategy,
	GeneratorStrategy,
	ValidatorStrategy,
} from "./strategies"

export class ColorManagerDomain implements ColorManagerDomainContract {
	private colorConverterStrategy: ConverterStrategyContract
	private formatterStrategy: FormatterStrategyContract
	private generatorStrategy: GeneratorStrategyContract
	private validatorStrategy: ValidatorStrategyContract

	constructor(
		colorConverterStrategy: ConverterStrategyContract,
		formatterStrategy: FormatterStrategyContract,
		generatorStrategy: GeneratorStrategyContract,
		validatorStrategy: ValidatorStrategyContract,
	) {
		this.colorConverterStrategy = colorConverterStrategy
		this.formatterStrategy = formatterStrategy
		this.generatorStrategy = generatorStrategy
		this.validatorStrategy = validatorStrategy
	}

	public formatColor<TargetColorType extends ColorType>(
		type: TargetColorType,
		value: ColorTypeMap[TargetColorType],
	): string {
		return this.formatterStrategy.format(type, value)
	}

	public generateColor(): ColorTypeMap {
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
	new FormatterStrategy(),
	new GeneratorStrategy(),
	new ValidatorStrategy(),
)
