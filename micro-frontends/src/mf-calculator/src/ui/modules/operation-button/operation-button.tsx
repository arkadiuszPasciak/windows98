import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import styles from "./operation-button.module.css"
import type { OperationButtonProps } from "./operation-button.types"

export const OperationButton: FunctionComponent<OperationButtonProps> = ({
	id,
	onClick,
	variant = "blue",
}) => {
	return (
		<button
			className={getClassNames([styles.button, styles[variant]])}
			data-testid={`mf-calculator-operation-button-${id}`}
			onClick={onClick}
			type="button"
		>
			{id}
		</button>
	)
}
