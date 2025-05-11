import type { FunctionComponent } from "react"
import { ConfigContext } from "./config.context"
import type { ConfigProps } from "./config.types"

export const Config: FunctionComponent<ConfigProps> = ({
	children,
	languages,
	onChangeLanguage,
}) => {
	const ConfigContextValue = { languages, onChangeLanguage }

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
