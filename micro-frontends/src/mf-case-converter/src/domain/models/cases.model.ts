export enum CaseType {
	ALTERNATECASE = "alternatecase",
	CAMELCASE = "camelcase",
	CONSTANTCASE = "constantcase",
	DOTCASE = "dotcase",
	KEBABCASE = "kebabcase",
	LOWERCASE = "lowercase",
	PASCALCASE = "pascalcase",
	PATHCASE = "pathcase",
	SENTENCECASE = "sentencecase",
	SNAKECASE = "snakecase",
	TITLECASE = "titlecase",
	UPPERCASE = "uppercase",
}

export type Cases = {
	[key in CaseType]: string
}
