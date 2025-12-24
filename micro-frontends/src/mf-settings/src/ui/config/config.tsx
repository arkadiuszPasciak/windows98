import type { FunctionComponent } from "react"
import { ConfigContext } from "./config.context"
import type { ConfigProps } from "./config.types"

export const Config: FunctionComponent<ConfigProps> = ({
	children,
	generalInformation,
	onChangeLanguage,
	onChangeTheme,
	onCloseProgram,
	languages,
	themes,
}) => {
	const ConfigContextValue = {
		generalInformation,
		onChangeLanguage,
		onChangeTheme,
		onCloseProgram,
		languages,
		themes,
	}

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
