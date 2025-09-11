import type {
	BuilderStrategyContract,
	GeneratorStrategyContract,
	QRCodeDomainContract,
} from "../contracts"
import type { QRCodeSize, QRCodeType } from "../models"
import { BuilderStrategy, GeneratorStrategy } from "../strategies"

class QRCodeDomain implements QRCodeDomainContract {
	private builder: BuilderStrategyContract
	private generator: GeneratorStrategyContract

	constructor() {
		this.builder = new BuilderStrategy()
		this.generator = new GeneratorStrategy()
	}

	public build(content: string, type: QRCodeType): string {
		return this.builder.build(content, type)
	}

	public generate(content: string, size: QRCodeSize): HTMLCanvasElement {
		return this.generator.generate(content, size)
	}
}

export const MSQRCode = new QRCodeDomain()
