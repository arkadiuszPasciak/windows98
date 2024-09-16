import type { ThemeDomainContract } from "../contracts";
export declare class ThemeDomain<Theme extends string> implements ThemeDomainContract<Theme> {
    private storage;
    private defaultTheme;
    constructor(defaultTheme: Theme);
    getThemeColor(): Theme;
    setThemeColor(theme: Theme): void;
    updateTheme(theme: Theme): void;
    mountThemeColor(): void;
    private initDefaultTheme;
}
