import { createTestingPinia } from "@pinia/testing"
import Pulpit from "@APP|Bundles/PulpitBundle/Components/Pulpit.vue"

describe("[PulpitBundle]<Components>(Pulpit)", async () => {
	beforeEach(() => {
		cy.viewport(1920, 700)

		cy.mount(Pulpit, {
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
		cy.get("section.Pulpit")

		cy.contains("My Computer")

		cy.contains("Recycle")
	})
})
