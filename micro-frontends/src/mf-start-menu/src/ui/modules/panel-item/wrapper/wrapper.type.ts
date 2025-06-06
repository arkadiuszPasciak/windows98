import type { PropsWithChildren } from "react"
import type { BasePanelItem } from "../panel-item.type"

export type PanelItemWrapperProps = Pick<BasePanelItem, "id" | "type"> &
	PropsWithChildren
