export type DSButtonProps = {
	size?: "small" | "medium"
	disabled?: boolean
	onClick?: () => void
	text: string
	isTextVisible?: boolean
	iconLeft?: React.ReactNode
	iconRight?: React.ReactNode
}
