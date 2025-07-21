export function getClassNames(classNames: Array<string>): string {
	const emptySpace = " "
	const filteredClassNames = classNames.filter(
		(className) => className && className.trim() !== "",
	)

	const preparedClassNames = filteredClassNames.join(emptySpace)

	return preparedClassNames
}
