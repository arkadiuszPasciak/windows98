import NavigationPulpit from "@APP|Bundles/NavigationBundle/Components/NavigationPulpit.vue"
import { createTestingPinia } from "@pinia/testing"

describe("[NavigationBundle]<Components>(NavigationPulpit)", () => {
	it("renders correctly component", () => {
		cy.viewport(500, 28)

		cy.mount(NavigationPulpit, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})

		cy.get("nav.NavigationGrid.NavigationPulpit")

		cy.get("div.Start")

		cy.get("button.AudioButton")

		cy.get("div.Clock")
	})
})
