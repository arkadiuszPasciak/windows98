import type { FunctionComponent } from "react"
import { MenuItemContent } from "../content"
import { MenuItemWrapper } from "../wrapper"
import type { MenuItemProgramProps } from "./program.type"
import { useMenuItemProgram } from "./use-program.hook"

export const MenuItemProgram: FunctionComponent<MenuItemProgramProps> = ({
	id,
	type,
	variant,
}) => {
	const { openProgram, translations } = useMenuItemProgram({ id })

	return (
		<button
			type="button"
			onClick={openProgram}
			data-testid={`mf-start-menu-menu-item-${id}-open-program`}
		>
			<MenuItemWrapper
				id={id}
				type={type}
			>
				<MenuItemContent
					id={id}
					name={translations.name}
					variant={variant}
				/>
			</MenuItemWrapper>
		</button>
	)
}
