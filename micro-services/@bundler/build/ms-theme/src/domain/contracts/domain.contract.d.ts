import type { EThemes } from "../models";
export interface ThemeDomainContract {
    getThemeColor(): EThemes;
    mountThemeColor(): void;
    setThemeColor(theme: EThemes): void;
    updateTheme(theme: EThemes): void;
}
