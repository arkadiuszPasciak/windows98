import type { FunctionComponent } from "react"
import { ConfigContext } from "./config.context"
import type { ConfigProps } from "./config.types"

export const Config: FunctionComponent<ConfigProps> = ({
	children,
	onCloseProgram,
	languages,
	onChangeLanguage,
	themes,
	onChangeTheme,
}) => {
	const ConfigContextValue = {
		onCloseProgram,
		languages,
		onChangeLanguage,
		themes,
		onChangeTheme,
	}

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
