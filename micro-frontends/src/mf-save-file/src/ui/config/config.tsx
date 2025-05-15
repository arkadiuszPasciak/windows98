import type { FunctionComponent } from "react"
import { ConfigContext } from "./config.context"
import type { ConfigProps } from "./config.types"

export const Config: FunctionComponent<ConfigProps> = ({
	children,
	contentFile,
	fileTypes,
	onCloseModal,
}) => {
	const ConfigContextValue = { contentFile, fileTypes, onCloseModal }

	return (
		<ConfigContext.Provider value={ConfigContextValue}>
			{children}
		</ConfigContext.Provider>
	)
}
