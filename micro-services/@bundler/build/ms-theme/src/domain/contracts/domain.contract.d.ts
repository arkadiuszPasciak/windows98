export interface ThemeDomainContract<EThemes> {
    updateTheme(theme: EThemes): void;
    getTheme(): EThemes;
}
