import type { BasePanelItem } from "../panel-item.type"

export type PanelItemContentProps = Pick<BasePanelItem, "id" | "variant"> & {
	name: string
}
