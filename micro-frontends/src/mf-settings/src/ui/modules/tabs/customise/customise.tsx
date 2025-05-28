import type { FunctionComponent } from "react"
import { LanguageManagerView as MFLanguageManager } from "../../../../../../mf-language-manager/src/ui/views"
import { ThemeManagerView as MFThemeManager } from "../../../../../../mf-theme-manager/src/ui/views"
import { useCustomise } from "./use-customise.hook"

export const CustomiseTab: FunctionComponent = () => {
	const { languages, onChangeLanguage, themes, onChangeTheme } = useCustomise()

	return (
		<div data-testid="mf-settings-customise-tab">
			<MFLanguageManager
				languages={languages}
				onChangeLanguage={onChangeLanguage}
			/>
			<MFThemeManager
				themes={themes}
				onChangeTheme={onChangeTheme}
			/>
		</div>
	)
}
