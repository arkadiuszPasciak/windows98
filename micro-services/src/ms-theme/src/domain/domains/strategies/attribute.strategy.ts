import type { Maybe } from "@windows98/toolkit"
import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { ThemeStrategyContract } from "../../contracts"
import { EAttributes } from "../../models"

export class AttributeThemeStrategy<EThemes>
	implements ThemeStrategyContract<EThemes>
{
	@MSErrorHandler.CatchError("AttributeThemeStrategy", "applyTheme")
	public applyTheme(theme: EThemes): void {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")

		if (element) {
			element.setAttribute(EAttributes.THEME, theme as string)
		} else {
			throw new Error("Element HTML not found")
		}
	}
}
