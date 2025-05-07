import { MSTheme } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { ThemeManagerDomainContract } from "../contracts"

export class ThemeManagerDomain<EThemes extends string>
	implements ThemeManagerDomainContract<EThemes>
{
	public theme: EThemes
	private msTheme: MSTheme<EThemes>

	constructor() {
		makeAutoObservable(this)

		this.msTheme = new MSTheme()

		this.theme = this.msTheme.getTheme()
	}

	public setTheme(theme: EThemes): void {
		if (this.theme === theme) return

		this.theme = theme as EThemes
		this.msTheme.updateTheme(theme as EThemes)
	}
}

export const themeManagerDomain = new ThemeManagerDomain()
