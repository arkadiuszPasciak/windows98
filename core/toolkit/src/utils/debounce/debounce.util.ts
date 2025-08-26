export function debounce<
	FunctionType extends (...parameters: unknown[]) => void,
>(
	callbackFunction: FunctionType,
	waitMilliseconds: number,
): (...parameters: Parameters<FunctionType>) => void {
	let timeoutId: ReturnType<typeof setTimeout>

	return (...parameters: Parameters<FunctionType>) => {
		if (timeoutId) clearTimeout(timeoutId)

		timeoutId = setTimeout(
			() => callbackFunction(...parameters),
			waitMilliseconds,
		)
	}
}
