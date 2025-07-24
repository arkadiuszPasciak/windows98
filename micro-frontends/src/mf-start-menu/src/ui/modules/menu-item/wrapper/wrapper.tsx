import { getClassNames } from "@windows98/toolkit"
import type { FunctionComponent } from "react"
import styles from "./wrapper.module.css"
import type { MenuItemWrapperProps } from "./wrapper.type"

export const MenuItemWrapper: FunctionComponent<MenuItemWrapperProps> = ({
	id,
	type,
	children,
}) => {
	return (
		<div
			className={getClassNames([
				styles["menu-item-wrapper"],
				styles[`type-${type}`],
			])}
			data-testid={`mf-start-menu-menu-item-${id}-wrapper`}
		>
			{children}
		</div>
	)
}
