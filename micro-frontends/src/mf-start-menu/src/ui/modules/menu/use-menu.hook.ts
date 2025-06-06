import { useState } from "react"
import { useConfig } from "../../hooks"

export function useMenu() {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
	const { configContext } = useConfig()

	const items = configContext.panelItems

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	return { items, isOpenMenu, toggleMenu }
}
