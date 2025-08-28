import { MSCaseConverter } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { CaseConverterDomainContract } from "../contracts"

export class CaseConverterDomain implements CaseConverterDomainContract {
	private msCaseConverter: typeof MSCaseConverter
	public alternatecase = ""
	public camelcase = ""
	public constantcase = ""
	public dotcase = ""
	public kebabcase = ""
	public lowercase = ""
	public pascalcase = ""
	public pathcase = ""
	public sentencecase = ""
	public snakecase = ""
	public titlecase = ""
	public uppercase = ""
	public inputValue = ""

	public setInputValue(value: string): void {
		this.inputValue = value
	}

	constructor() {
		makeAutoObservable(this)
		this.msCaseConverter = MSCaseConverter
	}

	public convertAllCases(): void {
		this.alternatecase = this.msCaseConverter.toAlternateCase(this.inputValue)
		this.camelcase = this.msCaseConverter.toCamelCase(this.inputValue)
		this.constantcase = this.msCaseConverter.toConstantCase(this.inputValue)
		this.dotcase = this.msCaseConverter.toDotCase(this.inputValue)
		this.kebabcase = this.msCaseConverter.toKebabCase(this.inputValue)
		this.lowercase = this.msCaseConverter.toLowercase(this.inputValue)
		this.pascalcase = this.msCaseConverter.toPascalCase(this.inputValue)
		this.pathcase = this.msCaseConverter.toPathCase(this.inputValue)
		this.sentencecase = this.msCaseConverter.toSentenceCase(this.inputValue)
		this.snakecase = this.msCaseConverter.toSnakeCase(this.inputValue)
		this.titlecase = this.msCaseConverter.toTitleCase(this.inputValue)
		this.uppercase = this.msCaseConverter.toUppercase(this.inputValue)
	}
}

export const caseConverterDomain = new CaseConverterDomain()
