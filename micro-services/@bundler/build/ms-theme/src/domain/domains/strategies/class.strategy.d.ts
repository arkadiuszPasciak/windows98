import type { ThemeStrategyContract } from "../../contracts";
export declare class ClassThemeStrategy<EThemes> implements ThemeStrategyContract<EThemes> {
    applyTheme(theme: EThemes): void;
}
