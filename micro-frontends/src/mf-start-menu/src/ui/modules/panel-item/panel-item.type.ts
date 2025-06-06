export enum PanelItemVariant {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

export enum PanelItemType {
	GROUP = "group",
	PROGRAM = "program",
}

export interface BasePanelItem<Type = PanelItemType> {
	variant: PanelItemVariant
	id: string
	type: Type
}

export type UsePanelItem = Pick<BasePanelItem, "id">
