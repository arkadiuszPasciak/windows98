import type { FunctionComponent } from "react"
import { DSHeading } from "../../ds-heading"
import { ModalCloseButton } from "../modal-close-button"
import styles from "./modal-header.module.scss"
import type { ModalHeaderProps } from "./modal-header.type"

export const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
	title,
	onClose,
	cursorType = "default",
	mouseDownEvent,
}) => {
	return (
		<div
			className={styles.header}
			style={{ cursor: cursorType }}
			onMouseDown={mouseDownEvent}
		>
			<DSHeading
				type="h3"
				text={title}
				id="ds-modal"
			/>
			<ModalCloseButton onClick={onClose} />
		</div>
	)
}
