import type { ReactNode } from "react"
import type { BasePanelItem, PanelItemType } from "../panel-item.type"

export interface PanelItemGroupProps
	extends BasePanelItem<PanelItemType.GROUP> {
	programs: ReactNode
}
