import { MSTheme } from "@windows98/micro-services"
import { makeAutoObservable } from "mobx"
import type { ThemeDomainContract } from "../contracts"
import { EThemes } from "../models"

export class ThemeDomain implements ThemeDomainContract {
	public theme: EThemes = EThemes.LIGHT
	private defaultTheme = EThemes.LIGHT
	private msTheme: MSTheme<EThemes>

	constructor() {
		makeAutoObservable(this)

		this.msTheme = new MSTheme<EThemes>(this.defaultTheme)
	}

	public setTheme(theme: EThemes): void {
		if (this.theme === theme) return

		this.updateTheme(theme)
		this.msTheme.setThemeColor(theme)

		console.log(theme, "props")
		console.log(this.theme, "state")
	}

	private updateTheme(theme: EThemes): void {
		this.theme = theme
	}
}

export const themeDomain = new ThemeDomain()
