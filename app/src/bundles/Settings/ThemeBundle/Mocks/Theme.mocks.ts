import {
	EThemes,
	type IThemeOptions,
} from "@APP/src/bundles/Settings/ThemeBundle/Supports/Theme.supports"

export const MThemeOptions = [
	{
		value: EThemes.LIGHT,
		name: `ThemeBundle.${EThemes.LIGHT}`,
	},
	{
		value: EThemes.DARK,
		name: `ThemeBundle.${EThemes.DARK}`,
	},
] as Array<IThemeOptions>
