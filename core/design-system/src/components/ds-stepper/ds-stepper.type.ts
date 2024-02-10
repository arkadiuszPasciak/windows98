export interface DSStepperProps {
	id: string
	modelValue: number
	disabled?: boolean
	onIncrease: () => void
	onDecrease: () => void
	onValueChange: (value: number) => void
}
