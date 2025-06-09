import type { PropsWithChildren } from "react"
import type { MenuItem } from "../../../../domain/models"
import type { MenuItemProps } from "../menu-item.type"

export type MenuItemContentProps = MenuItemProps & {
	name: string
} & PropsWithChildren &
	Pick<MenuItem, "id">

export type GetIconURL = (id: string) => string
