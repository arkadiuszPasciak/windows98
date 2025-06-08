import type { PropsWithChildren } from "react"
import type { BaseMenuItem, MenuItemType } from "../../../../domain/models"

export type MenuItemWrapperProps = Pick<BaseMenuItem, "id"> & {
	type: MenuItemType
} & PropsWithChildren
