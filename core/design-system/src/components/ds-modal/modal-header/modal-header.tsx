import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import { DSHeading } from "../../ds-heading"
import { ModalCloseButton } from "../modal-close-button"
import styles from "./modal-header.module.css"
import type { ModalHeaderProps } from "./modal-header.type"

export const ModalHeader: FunctionComponent<ModalHeaderProps> = ({
	id,
	title,
	onClose,
	cursorType = "default",
	mouseDownEvent,
	mouseUpEvent,
}) => {
	return (
		<div
			className={getClassNames([styles.header])}
			data-testid={`${id}-modal-header`}
			data-cursor={cursorType}
			onMouseDown={mouseDownEvent}
			onMouseUp={mouseUpEvent}
		>
			<DSHeading
				id={`${id}-modal-header`}
				text={title}
				type="h3"
			/>
			<ModalCloseButton
				id={id}
				onClick={onClose}
			/>
		</div>
	)
}
