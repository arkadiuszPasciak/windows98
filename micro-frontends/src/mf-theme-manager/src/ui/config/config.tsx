import type { FunctionComponent } from "react"
import { ConfigContext } from "./config.context"
import type { ConfigProps } from "./config.types"

export const Config: FunctionComponent<ConfigProps> = ({
	children,
	themes,
	onChangeTheme,
}) => {
	const ConfigContextValue = { themes, onChangeTheme }

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
