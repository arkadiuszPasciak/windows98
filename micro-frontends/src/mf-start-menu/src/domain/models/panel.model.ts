import type { PanelItem } from "./panel-item.model"

export type PanelItems =
	| [PanelItem]
	| [PanelItem, PanelItem]
	| [PanelItem, PanelItem, PanelItem]
