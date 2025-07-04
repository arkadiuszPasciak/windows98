import { useState } from "react"
import { useConfig } from "../../hooks"

export function useMenu() {
	const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
	const { configContext } = useConfig()

	const items = configContext.menuItems

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	const closeMenu = () => {
		setIsOpenMenu(false)
	}

	return { items, isOpenMenu, toggleMenu, closeMenu }
}
