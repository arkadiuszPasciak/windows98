import type { FunctionComponent } from "react"
import styles from "./modal-content.module.css"
import type { ModalContentProps } from "./modal-content.type"

export const ModalContent: FunctionComponent<ModalContentProps> = ({
	children,
	id,
}) => {
	return (
		<div
			className={styles.content}
			data-testid={`${id}-modal-content`}
		>
			{children}
		</div>
	)
}
