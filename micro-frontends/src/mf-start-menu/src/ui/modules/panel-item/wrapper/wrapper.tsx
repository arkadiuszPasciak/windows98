import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"
import type { PanelItemWrapperProps } from "./wrapper.type"

export const PanelItemWrapper: FunctionComponent<PanelItemWrapperProps> = ({
	id,
	variant,
	children,
}) => {
	return (
		<div
			className={`${styles["panel-item-wrapper"]} ${styles[`variant-${variant}`]}`}
			id={`mf-start-menu-panel-item-${id}`}
			data-test={`mf-start-menu-panel-item-${id}`}
		>
			{children}
		</div>
	)
}
