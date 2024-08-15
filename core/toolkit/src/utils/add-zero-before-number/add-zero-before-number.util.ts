export function addZeroBeforeNumber(number: number, maxNumber: number): string {
	return number < maxNumber ? `0${number}` : String(number)
}
