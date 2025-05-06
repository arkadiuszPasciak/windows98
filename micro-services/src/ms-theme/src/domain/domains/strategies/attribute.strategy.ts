import type { Maybe } from "@windows98/toolkit"
import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { ThemeStrategyContract } from "../../contracts"
import { EAttributes } from "../../models"

export class AttributeThemeStrategy<EThemes>
	implements ThemeStrategyContract<EThemes>
{
	@MSErrorHandler.CatchError("AttributeThemeStrategy", "applyTheme")
	public applyTheme(theme: EThemes): void {
		const element: Maybe<HTMLHtmlElement> = this.getHtmlElement()

		if (!element) {
			throw new Error("Unable to apply the theme")
		}

		element.setAttribute(EAttributes.THEME, theme as string)
	}

	@MSErrorHandler.CatchError("AttributeThemeStrategy", "getTheme")
	public getTheme(): EThemes {
		const element: Maybe<HTMLHtmlElement> = this.getHtmlElement()

		if (!element) {
			throw new Error("Unable to get the current theme")
		}

		const themeAttribute = element.getAttribute(EAttributes.THEME)

		if (!themeAttribute) {
			throw new Error("Theme attribute not found on the HTML element")
		}

		return themeAttribute as EThemes
	}

	@MSErrorHandler.CatchError("ClassThemeStrategy", "getHtmlElement")
	private getHtmlElement(): Maybe<HTMLHtmlElement> {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")

		if (!element) {
			throw new Error("Element HTML not found")
		}

		return element
	}
}
