import { useState } from "react"

export function useDSTabs() {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const setActiveTab = (index: number): void => {
		setActiveIndex((previous) => (previous === index ? previous : index))
	}

	return { activeIndex, setActiveTab }
}
