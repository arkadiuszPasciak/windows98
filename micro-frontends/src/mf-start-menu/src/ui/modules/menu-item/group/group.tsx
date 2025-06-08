import type { FunctionComponent } from "react"
import { MenuItemContent } from "../content"
import styles from "../panel-item.module.scss"
import { MenuItemWrapper } from "../wrapper"
import type { MenuItemGroupProps } from "./group.type"
import { usePanelItemGroup } from "./use-group.hook"

export const MenuItemGroup: FunctionComponent<MenuItemGroupProps> = ({
	id,
	type,
	variant,
	programs,
}) => {
	const { isGroupHovered, handleMouseEnter, handleMouseLeave, translations } =
		usePanelItemGroup({ id })

	return (
		<div
			className={styles["panel-item"]}
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
				{isGroupHovered && <>{programs}</>}
			</MenuItemWrapper>
		</div>
	)
}
