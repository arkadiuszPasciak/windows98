export type DSButtonProps = {
	size?: "small" | "medium"
	disabled?: boolean
	id: string
	onClick?: () => void
	text: string
	isTextVisible?: boolean
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
}
