import type { FunctionComponent } from "react"
import { ButtonStart } from "../button-start"
import { MenuItems } from "../menu-items"
import { useMenu } from "./use-menu.hook"

export const Menu: FunctionComponent = () => {
	const { items, isOpenMenu, toggleMenu } = useMenu()

	if (!items) return null

	return (
		<>
			<ButtonStart onClick={toggleMenu} />

			{isOpenMenu && <MenuItems items={items} />}
		</>
	)
}
