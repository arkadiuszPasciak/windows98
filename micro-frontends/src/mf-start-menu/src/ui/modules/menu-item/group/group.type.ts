import type { PropsWithChildren } from "react"
import type { GroupMenuItem } from "../../../../domain/models"
import type { MenuItemProps } from "../menu-item.type"

export type MenuItemGroupProps = MenuItemProps &
	Pick<GroupMenuItem & PropsWithChildren, "id" | "type"> &
	PropsWithChildren
