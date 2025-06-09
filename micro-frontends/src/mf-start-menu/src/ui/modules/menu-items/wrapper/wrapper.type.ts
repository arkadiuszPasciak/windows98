import type { PropsWithChildren } from "react"

export enum MenuItemsWrapperVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

export interface MenuItemsWrapperProps extends PropsWithChildren {
	variant: MenuItemsWrapperVariant
}
