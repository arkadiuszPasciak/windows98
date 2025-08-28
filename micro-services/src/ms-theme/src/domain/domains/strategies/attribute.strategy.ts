import type { Maybe } from "@windows98/toolkit"
import { CatchError } from "@windows98/toolkit"
import type { ThemeStrategyContract } from "../../contracts"
import { EAttributes } from "../../models"

export class AttributeThemeStrategy<EThemes>
	implements ThemeStrategyContract<EThemes>
{
	@CatchError()
	public applyTheme(theme: EThemes): void {
		const element: Maybe<HTMLHtmlElement> = this.getHtmlElement()

		if (!element) {
			throw new Error("Unable to apply the theme")
		}

		element.setAttribute(EAttributes.THEME, theme as string)
	}

	@CatchError()
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

	@CatchError()
	private getHtmlElement(): Maybe<HTMLHtmlElement> {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")

		if (!element) {
			throw new Error("Element HTML not found")
		}

		return element
	}
}
