import type { FunctionComponent } from "react"
import { DSButton } from "../../ds-button"
import { DSIconCloseSVG } from "../../ds-icon"
import type { ModalCloseButtonProps } from "./modal-close-button.type"

export const ModalCloseButton: FunctionComponent<ModalCloseButtonProps> = ({
	onClick,
	id,
}) => {
	return (
		<DSButton
			size="small"
			id={`${id}-close-button`}
			onClick={onClick}
			text=""
			iconLeft={<DSIconCloseSVG />}
		/>
	)
}
