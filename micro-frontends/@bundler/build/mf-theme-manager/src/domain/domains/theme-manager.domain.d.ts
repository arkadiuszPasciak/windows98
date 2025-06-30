import { Maybe } from '@windows98/toolkit';
import { ThemeManagerDomainContract } from '../contracts';
export declare class ThemeManagerDomain<EThemes extends string> implements ThemeManagerDomainContract<EThemes> {
    theme: Maybe<EThemes>;
    private msTheme;
    constructor();
    initTheme(): void;
    setTheme(theme: EThemes): void;
}
export declare const themeManagerDomain: ThemeManagerDomain<string>;
