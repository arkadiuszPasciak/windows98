import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"
import type { PanelItemWrapperProps } from "./wrapper.type"

export const PanelItemWrapper: FunctionComponent<PanelItemWrapperProps> = ({
	id,
	type,
	children,
}) => {
	return (
		<div
			className={`${styles["panel-item-wrapper"]} ${styles[`type-${type}`]}`}
			id={`mf-start-menu-panel-item-${id}`}
			data-test={`mf-start-menu-panel-item-${id}`}
		>
			{children}
		</div>
	)
}
