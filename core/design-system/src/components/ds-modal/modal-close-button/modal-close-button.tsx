import type { FunctionComponent } from "react"
import { DSButton } from "../../ds-button"
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
			text="Close modal"
			iconLeft={
				<img
					className="button-close-icon"
					width={8}
					height={7}
					src="/icons/close-modal.svg"
					alt="design-system.close-window"
				/>
			}
		/>
	)
}
