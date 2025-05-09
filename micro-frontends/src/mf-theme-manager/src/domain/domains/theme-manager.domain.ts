import { MSTheme } from "@windows98/micro-services"
import type { Maybe } from "@windows98/toolkit"
import { makeAutoObservable } from "mobx"
import type { ThemeManagerDomainContract } from "../contracts"

export class ThemeManagerDomain<EThemes extends string>
	implements ThemeManagerDomainContract<EThemes>
{
	public theme: Maybe<EThemes> = null
	private msTheme: MSTheme<EThemes>

	constructor() {
		makeAutoObservable(this)

		this.msTheme = new MSTheme()
	}

	public initTheme(): void {
		this.theme = this.msTheme.getTheme()
	}

	public setTheme(theme: EThemes): void {
		if (this.theme === theme) return

		this.theme = theme as EThemes
		this.msTheme.updateTheme(theme as EThemes)
	}
}

export const themeManagerDomain = new ThemeManagerDomain()
