import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"
import type { MenuItemWrapperProps } from "./wrapper.type"

export const MenuItemWrapper: FunctionComponent<MenuItemWrapperProps> = ({
	id,
	type,
	children,
}) => {
	return (
		<div
			className={`${styles["menu-item-wrapper"]} ${styles[`type-${type}`]}`}
			data-testid={`mf-start-menu-menu-item-${id}-wrapper`}
		>
			{children}
		</div>
	)
}
