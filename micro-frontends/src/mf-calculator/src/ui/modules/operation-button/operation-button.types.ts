import type { Numbers, Sign } from "../../../domain/models"

export interface OperationButtonProps {
	id: Numbers | Sign
	onClick: () => void
	variant: "primary" | "secondary"
}
