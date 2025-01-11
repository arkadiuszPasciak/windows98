import type { FunctionComponent } from "react"
import styles from "./modal-container.module.scss"
import type { ModalContainerProps } from "./modal-container.type"

export const ModalContainer: FunctionComponent<ModalContainerProps> = ({
	children,
	height,
	id,
	width,
}) => {
	return (
		<div
			className={styles.container}
			data-testid={`${id}-modal-container`}
			style={{ width, height }}
		>
			{children}
		</div>
	)
}
