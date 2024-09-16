export interface ThemeDomainContract<Theme extends string> {
    getThemeColor(): Theme;
    mountThemeColor(): void;
    setThemeColor(theme: Theme): void;
    updateTheme(theme: Theme): void;
}
