import type { ReactNode } from "react"
import type { GroupMenuItem } from "../../../../domain/models"
import type { MenuItemProps } from "../menu-item.type"

export type MenuItemGroupProps = MenuItemProps &
	GroupMenuItem & { programs: ReactNode }
