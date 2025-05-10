import type { FunctionComponent } from "react"
import { themeManagerDomain } from "../../domain/domains"
import { Config } from "../config"
import { DomainContext } from "../context/domain.context"
import { Wrapper } from "../modules/wrapper"
import type { ThemeManagerViewProps } from "./theme-manager.types"

export const ThemeManagerView: FunctionComponent<ThemeManagerViewProps> = ({
	themes,
	onChangeTheme,
}) => {
	return (
		<Config
			themes={themes}
			onChangeTheme={onChangeTheme}
		>
			<DomainContext.Provider value={themeManagerDomain}>
				<Wrapper />
			</DomainContext.Provider>
		</Config>
	)
}
