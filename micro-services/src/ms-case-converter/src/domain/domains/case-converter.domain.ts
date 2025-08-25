import type {
	CaseConverterDomainContract,
	CaseConverterStrategyContract,
} from "../contracts"
import {
	AlternateCaseStrategy,
	CamelCaseStrategy,
	ConstantCaseStrategy,
	DotCaseStrategy,
	KebabCaseStrategy,
	LowercaseStrategy,
	PascalCaseStrategy,
	PathCaseStrategy,
	SentenceCaseStrategy,
	SnakeCaseStrategy,
	TitleCaseStrategy,
	UppercaseStrategy,
} from "./strategies"

export class CaseConverterDomain implements CaseConverterDomainContract {
	private readonly lowercaseStrategy: CaseConverterStrategyContract
	private readonly uppercaseStrategy: CaseConverterStrategyContract
	private readonly camelCaseStrategy: CaseConverterStrategyContract
	private readonly pascalCaseStrategy: CaseConverterStrategyContract
	private readonly snakeCaseStrategy: CaseConverterStrategyContract
	private readonly kebabCaseStrategy: CaseConverterStrategyContract
	private readonly constantCaseStrategy: CaseConverterStrategyContract
	private readonly dotCaseStrategy: CaseConverterStrategyContract
	private readonly pathCaseStrategy: CaseConverterStrategyContract
	private readonly titleCaseStrategy: CaseConverterStrategyContract
	private readonly sentenceCaseStrategy: CaseConverterStrategyContract
	private readonly alternateCaseStrategy: CaseConverterStrategyContract

	constructor() {
		this.lowercaseStrategy = new LowercaseStrategy()
		this.uppercaseStrategy = new UppercaseStrategy()
		this.camelCaseStrategy = new CamelCaseStrategy()
		this.pascalCaseStrategy = new PascalCaseStrategy()
		this.snakeCaseStrategy = new SnakeCaseStrategy()
		this.kebabCaseStrategy = new KebabCaseStrategy()
		this.constantCaseStrategy = new ConstantCaseStrategy()
		this.dotCaseStrategy = new DotCaseStrategy()
		this.pathCaseStrategy = new PathCaseStrategy()
		this.titleCaseStrategy = new TitleCaseStrategy()
		this.sentenceCaseStrategy = new SentenceCaseStrategy()
		this.alternateCaseStrategy = new AlternateCaseStrategy()
	}

	toAlternateCase(content: string): string {
		return this.alternateCaseStrategy.convert(content)
	}

	toCamelCase(content: string): string {
		return this.camelCaseStrategy.convert(content)
	}

	toConstantCase(content: string): string {
		return this.constantCaseStrategy.convert(content)
	}

	toDotCase(content: string): string {
		return this.dotCaseStrategy.convert(content)
	}

	toKebabCase(content: string): string {
		return this.kebabCaseStrategy.convert(content)
	}

	toLowercase(content: string): string {
		return this.lowercaseStrategy.convert(content)
	}

	toPascalCase(content: string): string {
		return this.pascalCaseStrategy.convert(content)
	}

	toPathCase(content: string): string {
		return this.pathCaseStrategy.convert(content)
	}

	toSentenceCase(content: string): string {
		return this.sentenceCaseStrategy.convert(content)
	}

	toSnakeCase(content: string): string {
		return this.snakeCaseStrategy.convert(content)
	}

	toTitleCase(content: string): string {
		return this.titleCaseStrategy.convert(content)
	}

	toUppercase(content: string): string {
		return this.uppercaseStrategy.convert(content)
	}
}
