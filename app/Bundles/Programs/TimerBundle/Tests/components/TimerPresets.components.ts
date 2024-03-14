import { createTestingPinia } from "@pinia/testing"
import TimerPresets from "@APP|Bundles/TimerBundle/Components/TimerPresets.vue"
import TimerPresetsTesting from "@APP|Bundles/TimerBundle/Services/TimerPresetsTesting.services"

const TimerPresetsTestingService = new TimerPresetsTesting()

describe("[TimerBundle]<Components>(TimerPresets)", () => {
	it("renders correctly component and switch between presets", () => {
		cy.viewport(300, 70)

		cy.mount(TimerPresets, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})

		TimerPresetsTestingService.checkComponent()
	})
})
