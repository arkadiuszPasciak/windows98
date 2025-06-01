export enum PanelItemType {
	GROUP = "group",
	PROGRAM = "program",
}

export interface BasePanelItem {
	id: string
	type: PanelItemType
}

interface ProgramPanelItem extends BasePanelItem {
	type: PanelItemType.PROGRAM
}

interface GroupPanelItem extends BasePanelItem {
	type: PanelItemType.GROUP
	programs: PanelItem[]
}

export type PanelItem = ProgramPanelItem | GroupPanelItem
