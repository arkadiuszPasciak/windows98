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
		this.msTheme.updateTheme(theme)
	}

	private updateTheme(theme: EThemes): void {
		this.theme = theme
	}
}

export const themeDomain = new ThemeDomain()
