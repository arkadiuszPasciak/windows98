import type { PropsWithChildren } from "react"
import type { PanelItemProps } from "../panel-item.type"

export type PanelItemWrapperProps = Pick<PanelItemProps, "id" | "variant"> &
	PropsWithChildren
