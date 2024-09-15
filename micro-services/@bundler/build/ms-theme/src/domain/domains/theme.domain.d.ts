import type { ThemeDomainContract } from "../contracts";
import { EThemes } from "../models";
export declare class ThemeDomain implements ThemeDomainContract {
    private storage;
    private defaultTheme;
    getThemeColor(): EThemes;
    setThemeColor(theme: EThemes): void;
    updateTheme(theme: EThemes): void;
    mountThemeColor(): void;
    private initDefaultTheme;
}
