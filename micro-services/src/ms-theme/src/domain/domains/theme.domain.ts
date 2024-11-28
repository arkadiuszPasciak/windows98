import type { ThemeDomainContract, ThemeStrategyContract } from "../contracts"
import { AttributeThemeStrategy } from "./strategies"

export class ThemeDomain<EThemes> implements ThemeDomainContract<EThemes> {
	private themeStrategy: ThemeStrategyContract<EThemes>

	constructor() {
		this.themeStrategy = new AttributeThemeStrategy<EThemes>()
	}

	public updateTheme(theme: EThemes): void {
		this.themeStrategy.applyTheme(theme)
	}
}
