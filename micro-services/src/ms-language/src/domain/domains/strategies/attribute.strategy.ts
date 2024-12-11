import type { Maybe } from "@windows98/toolkit"
import { MSErrorHandler } from "../../../../../ms-error-handler/src"
import type { LanguageStrategyContract } from "../../contracts"
import { EAttributes } from "../../models"

export class AttributeLanguageStrategy<ELanguages>
	implements LanguageStrategyContract<ELanguages>
{
	@MSErrorHandler.CatchError("AttributeLanguageStrategy", "applyLanguage")
	public applyLanguage(language: ELanguages): void {
		const element: Maybe<HTMLHtmlElement> =
			window.document.querySelector("html")

		if (element) {
			element.setAttribute(EAttributes.LANGUAGE, language as string)
		} else {
			throw new Error("Element HTML not found")
		}
	}
}
