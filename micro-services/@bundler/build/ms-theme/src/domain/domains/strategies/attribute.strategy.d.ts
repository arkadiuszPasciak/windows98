import { ThemeStrategyContract } from '../../contracts';
export declare class AttributeThemeStrategy<EThemes> implements ThemeStrategyContract<EThemes> {
    applyTheme(theme: EThemes): void;
    getTheme(): EThemes;
    private getHtmlElement;
}
