import type { MenuItems } from "../../../domain/models"

export enum MenuItemsVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

export interface MenuItemsProps {
	items: MenuItems
	variant: MenuItemsVariant
}
