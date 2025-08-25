export interface CaseConverterDomainContract {
	toAlternateCase(content: string): string
	toCamelCase(content: string): string
	toConstantCase(content: string): string
	toDotCase(content: string): string
	toKebabCase(content: string): string
	toLowercase(content: string): string
	toPascalCase(content: string): string
	toPathCase(content: string): string
	toSentenceCase(content: string): string
	toSnakeCase(content: string): string
	toTitleCase(content: string): string
	toUppercase(content: string): string
}
