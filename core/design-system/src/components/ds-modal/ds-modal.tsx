import type { FunctionComponent } from "react"
import styles from "./ds-modal.module.scss"
import type { DSModalProps } from "./ds-modal.type"
import { ModalContent } from "./modal-content"
import { ModalHeader } from "./modal-header"
import { ModalNavigation } from "./modal-navigation/modal-navigation"
import { ModalTabs } from "./modal-tabs"
import { useDSModal } from "./use-ds-modal.hook"

export const DSModal: FunctionComponent<DSModalProps> = ({
	id,
	title,
	width = "450px",
	height = "150px",
	resizeWindow = false,
	moveWindow = true,
	tabs,
	children,
	navigation,
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
			className={styles.modal}
			ref={dialogRef}
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
				{!tabs && (
					<>
						{navigation && (
							<ModalNavigation
								id={id}
								navigation={navigation}
							/>
						)}
						{children && <ModalContent id={id}>{children}</ModalContent>}
					</>
				)}
				{tabs && (
					<ModalTabs
						id={id}
						initialIndex={tabs.initialIndex}
						tabs={tabs.tabs}
					/>
				)}
			</div>
		</dialog>
	)
}
