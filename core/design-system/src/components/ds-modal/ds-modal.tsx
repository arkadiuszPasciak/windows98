import type { FunctionComponent } from "react"
import styles from "./ds-modal.module.scss"
import type { DSModalProps } from "./ds-modal.type"
import { ModalContent } from "./modal-content"
import { ModalHeader } from "./modal-header"
import { ModalNavigation } from "./modal-navigation/modal-navigation"
import { useDSModal } from "./use-ds-modal.hook"

export const DSModal: FunctionComponent<DSModalProps> = ({
	id,
	title,
	width = "450px",
	height = "150px",
	resizeWindow = false,
	moveWindow = true,
	modalState = false,
	children,
	navigation,
}) => {
	const {
		modalElement,
		dialogRef,
		mouseDown,
		mouseUp,
		mouseMove,
		cursorType,
		closeModal,
	} = useDSModal({ moveWindow, modalState })

	if (!modalState) return null

	return (
		<dialog
			ref={dialogRef}
			className={styles.modal}
			onMouseMove={mouseMove}
		>
			<div
				className={`${styles.container} ${resizeWindow ? styles["resize-window"] : ""} ${moveWindow ? styles["move-window"] : ""}`}
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
				{navigation && (
					<ModalNavigation
						id={id}
						navigation={navigation}
					/>
				)}
				<ModalContent id={id}>{children}</ModalContent>
			</div>
		</dialog>
	)
}
