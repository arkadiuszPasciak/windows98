import type { PanelItemProps } from "../panel-item.type"

export type PanelItemContentProps = Pick<PanelItemProps, "id" | "variant"> & {
	name: string
}
