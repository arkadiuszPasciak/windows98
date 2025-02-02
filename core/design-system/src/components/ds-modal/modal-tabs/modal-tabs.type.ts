import type { ReactNode } from "react"

export interface DSModalTabs {
	component: ReactNode
	title: string
}

export interface DSModalTabsProps {
	initialIndex?: number
	tabs: DSModalTabs[]
	id: string
}

export type useDSModalTabs = Pick<DSModalTabsProps, "initialIndex">
