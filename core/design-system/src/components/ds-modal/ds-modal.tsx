import type { FunctionComponent } from "react"
import styles from "./ds-modal.module.scss"
import type { DSModalProps } from "./ds-modal.type"
import { ModalContainer } from "./modal-container"
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
	onClose,
	children,
	navigation,
}) => {
	const { modalElement, mouseMove, mouseDownEvent, cursorType } = useDSModal({
		moveWindow,
	})

	if (!modalState) return null

	return (
		<div
			ref={modalElement}
			className={`${resizeWindow ? styles["resize-window"] : ""} ${moveWindow ? styles["move-window"] : ""}`}
			onMouseMove={mouseMove}
			style={{ cursor: cursorType }}
		>
			<ModalContainer
				id={id}
				height={height}
				width={width}
			>
				<ModalHeader
					id={id}
					cursorType={cursorType}
					mouseDownEvent={mouseDownEvent}
					onClose={onClose}
					title={title}
				/>

				{navigation && (
					<ModalNavigation
						id={id}
						navigation={navigation}
					/>
				)}

				<ModalContent id={id}>{children}</ModalContent>
			</ModalContainer>
		</div>
	)
}
