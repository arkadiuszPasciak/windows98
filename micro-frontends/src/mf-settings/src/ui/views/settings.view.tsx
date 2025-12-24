import type { FunctionComponent } from "react"
import { Config } from "../config"
import { Wrapper } from "../modules/wrapper"
import type { SettingsViewProps } from "./settings.types"

export const MFSettings: FunctionComponent<SettingsViewProps> = ({
	generalInformation,
	onChangeLanguage,
	onChangeTheme,
	onCloseProgram,
	languages,
	themes,
}) => {
	return (
		<Config
			generalInformation={generalInformation}
			onChangeLanguage={onChangeLanguage}
			onChangeTheme={onChangeTheme}
			onCloseProgram={onCloseProgram}
			languages={languages}
			themes={themes}
		>
			<Wrapper />
		</Config>
	)
}
