import type { ThemeDomainContract } from "../contracts";
export declare class ThemeDomain<EThemes> implements ThemeDomainContract<EThemes> {
    private themeStrategy;
    constructor();
    updateTheme(theme: EThemes): void;
}
