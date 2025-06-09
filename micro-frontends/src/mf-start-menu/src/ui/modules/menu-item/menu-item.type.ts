import type { MenuItem } from "../../../domain/models"

export enum MenuItemVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

export interface MenuItemProps {
	variant: MenuItemVariant
}

export type UseMenuItem = Pick<MenuItem, "id">
