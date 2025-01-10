import type { FunctionComponent } from "react"
import type { ModalContentProps } from "./modal-content.type"
import styles from "./modal-navigation.module.scss"

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
