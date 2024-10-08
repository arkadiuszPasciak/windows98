import { ELanguageLocales } from "@APP/src/bundles/Settings/LanguageBundle/Supports/Language.supports"
import { EStorageNames } from "@APP/src/bundles/Window/StorageBundle/Supports/Storage.supports"
import LanguageSwitcher from "@APP|Bundles/LanguageBundle/Components/LanguageSwitcher.vue"

describe("[LanguageBundle]<Components>(LanguageSwitcher)", () => {
	beforeEach(() => {
		cy.viewport(80, 30)

		cy.mount(LanguageSwitcher)
	})

	it("should have element, class and change language", () => {
		cy.get("div.UISelect.LanguageSwitcher")

		cy.get('[data-test="ui-select-languages"]').select("Polish")

		cy.get('[data-test="ui-select-languages"] > option:selected').should(
			"have.text",
			"Polski",
		)

		cy.get("html").should("have.attr", "lang", ELanguageLocales.POLISH)

		cy.getAllLocalStorage().then((result: Cypress.StorageByOrigin) => {
			expect(result).to.deep.equal({
				"http://localhost:5173": {
					[EStorageNames.LANGUAGE]: ELanguageLocales.POLISH,
				},
			})
		})

		cy.get('[data-test="ui-select-languages"]').select("Angielski")

		cy.get('[data-test="ui-select-languages"] > option:selected').should(
			"have.text",
			"English",
		)

		cy.get("html").should("have.attr", "lang", ELanguageLocales.ENGLISH)

		cy.getAllLocalStorage().then((result: Cypress.StorageByOrigin) => {
			expect(result).to.deep.equal({
				"http://localhost:5173": {
					[EStorageNames.LANGUAGE]: ELanguageLocales.ENGLISH,
				},
			})
		})
	})
})
