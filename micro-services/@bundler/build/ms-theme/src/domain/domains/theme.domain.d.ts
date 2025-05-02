import { ThemeDomainContract, ThemeStrategyContract } from '../contracts';
declare class ThemeDomain<EThemes> implements ThemeDomainContract<EThemes> {
    private themeStrategy;
    constructor(themeStrategy: ThemeStrategyContract<EThemes>);
    updateTheme(theme: EThemes): void;
}
export declare class MSTheme<EThemes> extends ThemeDomain<EThemes> {
    constructor();
}
export {};
