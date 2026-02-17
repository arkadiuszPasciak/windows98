import type {
	ColorManagerDomainContract,
	ConverterStrategyContract,
	RandomColorGeneratorStrategyContract,
} from "../contracts"
import type { HexColor, RgbColor } from "../models"
import { ConverterStrategy, RandomColorGeneratorStrategy } from "./strategies"

export class ColorManagerDomain implements ColorManagerDomainContract {
	private colorConverterStrategy: ConverterStrategyContract
	private randomColorGeneratorStrategy: RandomColorGeneratorStrategyContract

	constructor(
		colorConverterStrategy: ConverterStrategyContract,
		randomColorGeneratorStrategy: RandomColorGeneratorStrategyContract,
	) {
		this.colorConverterStrategy = colorConverterStrategy
		this.randomColorGeneratorStrategy = randomColorGeneratorStrategy
	}

	public generateColor(): { rgb: RgbColor; hex: HexColor } {
		const hex = this.randomColorGeneratorStrategy.generateRandomHex()
		const rgb = this.colorConverterStrategy.convert("hex", hex, "rgb")

		return { rgb: rgb as RgbColor, hex: hex as HexColor }
	}
}

export const MSColorManager = new ColorManagerDomain(
	new ConverterStrategy(),
	new RandomColorGeneratorStrategy(),
)
