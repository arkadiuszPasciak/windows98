import type { FunctionComponent } from "react"
import { MenuItemType } from "../../../domain/models"
import { MenuItemGroup, MenuItemProgram, MenuItemVariant } from "../menu-item"
import styles from "./menu-items.module.scss"
import type { MenuItemsProps } from "./menu-items.type"

export const MenuItems: FunctionComponent<MenuItemsProps> = ({
	items,
	variant,
}) => {
	return (
		<div
			className={`${styles["menu-items-wrapper"]} ${styles[`variant-${variant}`]}`}
			data-testid={`mf-start-menu-menu-items-${variant}`}
		>
			{items.map((item) =>
				item.type === "group" && item.programs ? (
					<MenuItemGroup
						key={`mf-start-menu-menu-item-${item.id}`}
						id={item.id}
						type={MenuItemType.GROUP}
						variant={MenuItemVariant.PRIMARY}
						programs={<p>123</p>}
					/>
				) : (
					<MenuItemProgram
						key={`mf-start-menu-menu-item-${item.id}`}
						id={item.id}
						type={MenuItemType.PROGRAM}
						variant={MenuItemVariant.PRIMARY}
					/>
				),
			)}
		</div>
	)
}
