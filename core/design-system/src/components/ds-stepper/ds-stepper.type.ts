export interface DSStepperProps {
	disabled?: boolean
	id: string
	modelValue: number
	onIncrease: () => void
	onDecrease: () => void
	onValueChange: (value: number) => void
}

export interface UseDSStepperProps {
	modelValue: DSStepperProps['modelValue']
	onIncrease: DSStepperProps['onIncrease']
	onDecrease: DSStepperProps['onDecrease']
	onValueChange: DSStepperProps['onValueChange']
}
