import type { FunctionComponent } from "react"
import styles from "./wrapper.module.scss"
import type { MenuItemsWrapperProps } from "./wrapper.type"

export const MenuItemsWrapper: FunctionComponent<MenuItemsWrapperProps> = ({
	variant,
	children,
}) => {
	return (
		<div
			className={`${styles["menu-items-wrapper"]} ${styles[`variant-${variant}`]}`}
			data-testid={`mf-start-menu-menu-items-wrapper-${variant}`}
		>
			{children}
		</div>
	)
}
