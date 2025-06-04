import type { ReactNode } from "react"
import type { PanelItemType } from "../../../domain/models"

export enum PanelItemVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface BasePanelItem {
	variant: PanelItemVariant
	id: string
}

interface PanelItemProgram extends BasePanelItem {
	type: PanelItemType.PROGRAM
}

interface PanelItemGroup extends BasePanelItem {
	type: PanelItemType.GROUP
	programs?: ReactNode
}

export type PanelItemProps = PanelItemProgram & PanelItemGroup

export type UsePanelItem = Pick<PanelItemProps, "id">
