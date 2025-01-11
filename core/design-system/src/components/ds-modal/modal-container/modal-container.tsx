import type { FunctionComponent } from "react"
import type { ModalContainerProps } from "./modal-container.type"
import styles from "./modal-navigation.module.scss"

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
