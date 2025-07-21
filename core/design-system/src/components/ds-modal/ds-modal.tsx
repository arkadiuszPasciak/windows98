import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import styles from "./ds-modal.module.css"
import type { DSModalProps } from "./ds-modal.type"
import { ModalContent } from "./modal-content"
import { ModalHeader } from "./modal-header"
import { useDSModal } from "./use-ds-modal.hook"

export const DSModal: FunctionComponent<DSModalProps> = ({
	className = "",
	id,
	title,
	width = "450px",
	height = "150px",
	resizeWindow = false,
	moveWindow = true,
	children,
	onClose,
}) => {
	const {
		dialogRef,
		modalElement,
		mouseDown,
		mouseUp,
		mouseMove,
		cursorType,
		closeModal,
	} = useDSModal({ moveWindow, onClose })

	return (
		<dialog
			className={getClassNames([styles.modal, className])}
			ref={dialogRef}
			onMouseMove={mouseMove}
		>
			<div
				className={getClassNames([styles.container])}
				data-resize-window={resizeWindow}
				data-testid={`${id}-modal-container`}
				ref={modalElement}
				style={{ width, height }}
			>
				<ModalHeader
					cursorType={cursorType}
					id={id}
					onClose={closeModal}
					mouseDownEvent={mouseDown}
					mouseUpEvent={mouseUp}
					title={title}
				/>
				<ModalContent id={id}>{children}</ModalContent>
			</div>
		</dialog>
	)
}
