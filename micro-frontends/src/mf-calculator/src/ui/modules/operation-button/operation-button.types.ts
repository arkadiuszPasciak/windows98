import type {
	ECalculatorNumber,
	ECalculatorSymbol,
} from "../../../domain/models"

export interface OperationButtonProps {
	id: ECalculatorNumber | ECalculatorSymbol
	onClick: () => void
	variant: "primary" | "secondary"
}
