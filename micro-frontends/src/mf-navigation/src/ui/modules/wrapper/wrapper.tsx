import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"
import type { WrapperProps } from "./wrapper.types"

export const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
	return (
		<div
			className={styles.wrapper}
			data-testid="ma-navigation-wrapper"
		>
			{children}
		</div>
	)
}
