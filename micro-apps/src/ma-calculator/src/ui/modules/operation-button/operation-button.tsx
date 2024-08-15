import type { FunctionComponent } from "react"
import styles from "./operation-button.module.scss"
import type { OperationButtonProps } from "./operation-button.types"

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
