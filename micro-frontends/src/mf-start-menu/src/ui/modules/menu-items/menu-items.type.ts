import type { MenuItems } from "../../../domain/models"

export interface MenuItemsProps {
	items: MenuItems
	closeMenu: () => void
}
