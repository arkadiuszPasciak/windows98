import type { FunctionComponent } from "react"
import { Config } from "../config"
import { Wrapper } from "../modules/wrapper"
import type { SettingsViewProps } from "./settings.types"

export const MFSettings: FunctionComponent<SettingsViewProps> = ({
	onCloseProgram,
	languages,
	onChangeLanguage,
	themes,
	onChangeTheme,
}) => {
	return (
		<Config
			onCloseProgram={onCloseProgram}
			languages={languages}
			onChangeLanguage={onChangeLanguage}
			themes={themes}
			onChangeTheme={onChangeTheme}
		>
			<Wrapper />
		</Config>
	)
}
