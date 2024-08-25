import { EThemes } from "@APP/src/bundles/Settings/ThemeBundle/Supports/Theme.supports"
import { EStorageNames } from "@APP/src/bundles/Window/StorageBundle/Supports/Storage.supports"
import ThemeSwitcher from "@APP|Bundles/ThemeBundle/Components/ThemeSwitcher.vue"

describe("[ThemeBundle]<Components>(ThemeSwitcher)", () => {
	beforeEach(() => {
		cy.viewport(80, 30)

		cy.mount(ThemeSwitcher)
	})

	it("should have element, class and change theme", () => {
		cy.get("div.UISelect.ThemeSwitcher")

		cy.get('[data-test="ui-select-themes"]').select("Dark")

		cy.get('[data-test="ui-select-themes"] > option:selected').should(
			"have.text",
			"Dark",
		)

		cy.get("html").should("have.class", "theme-dark")

		cy.getAllLocalStorage().then((result: Cypress.StorageByOrigin) => {
			expect(result).to.deep.equal({
				"http://localhost:5173": {
					[EStorageNames.THEME]: EThemes.DARK,
				},
			})
		})

		cy.get('[data-test="ui-select-themes"]').select("Light")

		cy.get('[data-test="ui-select-themes"] > option:selected').should(
			"have.text",
			"Light",
		)

		cy.getAllLocalStorage().then((result: Cypress.StorageByOrigin) => {
			expect(result).to.deep.equal({
				"http://localhost:5173": {
					[EStorageNames.THEME]: EThemes.LIGHT,
				},
			})
		})

		cy.get("html").should("have.class", "theme-light")
	})
})
