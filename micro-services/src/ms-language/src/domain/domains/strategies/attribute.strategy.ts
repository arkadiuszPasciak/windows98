import type { Maybe } from "@windows98/toolkit"
import { CatchError } from "@windows98/toolkit"
import type { LanguageStrategyContract } from "../../contracts"
import { EAttributes } from "../../models"

export class AttributeLanguageStrategy<ELanguages>
	implements LanguageStrategyContract<ELanguages>
{
	@CatchError()
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
