import SettingsGeneral from "@APP|Bundles/SettingsBundle/Components/SettingsGeneral.vue"
import { createTestingPinia } from "@pinia/testing"

describe("[SettingsBundle]<Components>(SettingsGeneral)", () => {
	beforeEach(() => {
		cy.viewport(420, 415)

		cy.mount(SettingsGeneral, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})
	})

	it("should have elements and classes", () => {
		cy.get("div.SettingsGeneral")

		cy.get('[data-test="settings-general-device-title"]').contains("Device:")

		cy.get('[data-test="settings-general-device-text"]')

		cy.get('[data-test="settings-general-operation-system-title"]').contains(
			"Operation system:",
		)

		cy.get('[data-test="settings-general-operation-system-text"]')

		cy.get('[data-test="settings-general-browser-title"]').contains("Browser:")

		cy.get('[data-test="settings-general-browser-text"]')
	})
})
