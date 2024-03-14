import { createTestingPinia } from "@pinia/testing"
import Start from "@APP|Bundles/StartBundle/Components/Start.vue"

describe("[StartBundle]<Components>(Start)", () => {
	beforeEach(() => {
		cy.viewport(425, 280)

		cy.mount(Start, {
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

	it("should have element and class", () => {
		cy.get("div.Start")
	})

	it("should open panel", () => {
		cy.get("[data-test=\"start-button-open\"]").click()

		cy.get(".StartPanel.v-primary.is-active")
	})
})
