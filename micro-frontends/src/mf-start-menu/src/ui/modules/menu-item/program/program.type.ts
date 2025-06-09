import type { ProgramMenuItem } from "../../../../domain/models"
import type { MenuItemProps } from "../menu-item.type"

export type MenuItemProgramProps = MenuItemProps &
	Pick<ProgramMenuItem, "id" | "type">
