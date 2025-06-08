import type { FunctionComponent } from "react"
import { Config } from "../../context/config.context"
import { Wrapper } from "../../modules/wrapper"
import type { StartMenuViewProps } from "./start-menu.type"

export const MFStartMenu: FunctionComponent<StartMenuViewProps> = ({
	onRunProgram,
	menuItems,
}) => {
	return (
		<Config
			onRunProgram={onRunProgram}
			menuItems={menuItems}
		>
			<Wrapper />
		</Config>
	)
}
