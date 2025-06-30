import { Maybe } from '@windows98/toolkit';
export interface ThemeManagerDomainContract<EThemes extends string> {
    theme: Maybe<EThemes>;
    initTheme(): void;
    setTheme(theme: EThemes): void;
}
