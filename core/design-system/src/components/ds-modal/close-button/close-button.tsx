import type { FunctionComponent } from "react"
import { DSButton } from "../../ds-button"
import type { CloseButtonProps } from "./close-button.type"

export const CloseButton: FunctionComponent<CloseButtonProps> = ({
	onClick,
}) => {
	return (
		<DSButton
			size="small"
			id="ds-modal-button-close"
			onClick={onClick}
			text=""
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
