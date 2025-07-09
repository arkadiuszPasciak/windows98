export function getClassNames(
	className: Array<string>,
	additionalClassName?: string,
): string {
	const emptySpace = " "
	let classNames = className.join(emptySpace)

	if (additionalClassName) {
		if (classNames) {
			classNames = classNames + emptySpace + additionalClassName
		} else {
			classNames = additionalClassName
		}
	}

	return classNames
}
