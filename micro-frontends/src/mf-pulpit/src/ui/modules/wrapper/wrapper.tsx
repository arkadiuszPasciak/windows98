import type { FunctionComponent } from "react"
import styles from "./wrapper.module.css"
import type { WrapperProps } from "./wrapper.types"

export const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return (
		<div
			className={styles.wrapper}
			data-testid="mf-pulpit-wrapper"
		>
			{children}
		</div>
	)
}
