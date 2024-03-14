import { createTestingPinia } from "@pinia/testing"
import Clock from "@APP|Bundles/ClockBundle/Components/Clock.vue"

describe("[ClockBundle]<Components>(Clock)", () => {
	beforeEach(() => {
		cy.viewport(28, 12)

		cy.mount(Clock, {
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
		cy.get("div.Clock")
	})

	it("should have time", () => {
		cy.get("p.time").should("have.length", true)
	})
})
