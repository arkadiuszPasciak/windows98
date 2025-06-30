import { MFSettings } from "@windows98/micro-frontends"
import type { FunctionComponent } from "react"
import { useSettings } from "./use-settings.hook"

export const Settings: FunctionComponent = () => {
	const { onCloseProgram, languages, onChangeLanguage, themes, onChangeTheme } =
		useSettings()

	return (
		<MFSettings
			onCloseProgram={onCloseProgram}
			languages={languages}
			onChangeLanguage={onChangeLanguage}
			themes={themes}
			onChangeTheme={onChangeTheme}
		/>
	)
}
