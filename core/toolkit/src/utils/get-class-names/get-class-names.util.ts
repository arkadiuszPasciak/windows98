export function getClassNames(
	className: Array<string>,
	optionalClassName?: string,
): string {
	const emptySpace = " "
	let classNames = className.join(emptySpace)

	if (optionalClassName) {
		if (classNames) {
			classNames = classNames + emptySpace + optionalClassName
		} else {
			classNames = optionalClassName
		}
	}

	return classNames
}
