import { createTestingPinia } from "@pinia/testing"
import TimerModal from "@APP|Bundles/TimerBundle/Components/TimerModal.vue"
import TimerModalTesting from "@APP|Bundles/TimerBundle/Services/TimerModalTesting.services"

const TimerModalTestingService = new TimerModalTesting()

describe("[TimerBundle]<Components>(TimerModal)", () => {
	it("renders correctly component, show message and close it", () => {
		cy.viewport(190, 110)

		cy.mount(TimerModal, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
						initialState: {
							timer: {
								modal: {
									status: true,
								},
							},
						},
					}),
				],
			},
		})

		TimerModalTestingService.checkComponent()
	})
})
