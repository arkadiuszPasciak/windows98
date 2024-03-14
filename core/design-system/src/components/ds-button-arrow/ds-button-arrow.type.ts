import type { MouseEvent } from "react"
import type { DSDefaultProps } from "../../types/component.type"

export interface DSButtonArrowProps extends DSDefaultProps {
	ariaLabel: string
	direction: "top" | "bottom"
	disabled: boolean
	id: string | number
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void
	size: "small" | "medium"
}
