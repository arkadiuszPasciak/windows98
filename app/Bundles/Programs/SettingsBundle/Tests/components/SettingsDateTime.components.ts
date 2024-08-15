import SettingsDateTime from "@APP|Bundles/SettingsBundle/Components/SettingsDateTime.vue"
import { createTestingPinia } from "@pinia/testing"

describe("[SettingsBundle]<Components>(SettingsDateTime)", () => {
	beforeEach(() => {
		cy.viewport(420, 415)

		cy.mount(SettingsDateTime, {
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
		cy.get("div.SettingsDateTime")

		cy.get("div.UIFrame.TimezoneSwitcher")

		cy.get('[data-test="frame-title-timezone"]').contains("Timezone")
	})
})
