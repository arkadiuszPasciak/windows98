import type { FunctionComponent } from "react"
import { MenuItemContent } from "../content"
import styles from "../menu-item.module.scss"
import { MenuItemWrapper } from "../wrapper"
import type { MenuItemGroupProps } from "./group.type"
import { usePanelItemGroup } from "./use-group.hook"

export const MenuItemGroup: FunctionComponent<MenuItemGroupProps> = ({
	children,
	id,
	type,
	variant,
}) => {
	const { isGroupHovered, handleMouseEnter, handleMouseLeave, translations } =
		usePanelItemGroup({ id })

	return (
		<div
			className={styles["menu-item"]}
			data-testid={`mf-start-menu-menu-item-${id}-open-group`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<MenuItemWrapper
				id={id}
				type={type}
			>
				<MenuItemContent
					id={id}
					name={translations.name}
					variant={variant}
				/>
				{isGroupHovered && <>{children}</>}
			</MenuItemWrapper>
		</div>
	)
}
