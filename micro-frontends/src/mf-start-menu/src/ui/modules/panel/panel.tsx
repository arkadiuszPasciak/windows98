import type { FunctionComponent } from "react"
import styles from "./panel.module.scss"
import type { PanelProps } from "./panel.type"

export const Panel: FunctionComponent<PanelProps> = ({ children, variant }) => {
	return (
		<div
			className={`${styles.panel} ${styles[`panel-${variant}`]}`}
			data-testid={`mf-start-menu-panel-${variant}`}
		>
			{children}
		</div>
	)
}
