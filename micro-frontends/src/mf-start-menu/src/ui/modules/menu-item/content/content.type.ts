import type { PropsWithChildren } from "react"
import type { BaseMenuItem } from "../../../../domain/models"
import type { MenuItemProps } from "../menu-item.type"

export type MenuItemContentProps = Pick<BaseMenuItem, "id"> &
	MenuItemProps & { name: string } & PropsWithChildren

export type GetIconURL = (id: Pick<BaseMenuItem, "id">) => string
