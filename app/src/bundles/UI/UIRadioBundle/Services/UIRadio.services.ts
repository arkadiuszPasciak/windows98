export function generateDataTestName(
	type: "input" | "icon" | "label",
	name: string,
	modelValue: string,
): string {
	return `ui-radio-${type}-${name}-${modelValue
		.toLowerCase()
		.replace(/\s+/g, "-")}`
}
