import type { FunctionComponent } from "react"
import type { OperationButtonProps } from './operation-button.types'
import styles from "./operation-button.module.scss"

export const OperationButton: FunctionComponent<OperationButtonProps> = ({
	id,
	onClick,
	variant = "blue",
}) => {
	return (
		<button
			className={`${styles.button} ${styles[variant]}`}
			data-testid={`ma-calculator-operation-button-${id}`}
			onClick={onClick}
			type="button"
		>
			{id}
		</button>
	)
}
