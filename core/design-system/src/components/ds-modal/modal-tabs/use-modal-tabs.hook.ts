import { useState } from "react"
import type { useDSModalTabs } from "./modal-tabs.type"

export const useDSTabs = ({ initialIndex }: useDSModalTabs) => {
	const [activeIndex, setActiveIndex] = useState(initialIndex)

	const setActiveTab = (index: number): void => {
		setActiveIndex(index)
	}

	return {
		activeTab: activeIndex,
		setActiveTab,
	}
}
