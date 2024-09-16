import type { EThemes } from "../models/theme.model";

export interface ThemeDomainContract {
	theme: EThemes

	setTheme(theme: EThemes): void
}
