import { createTestingPinia } from "@pinia/testing"
import TimerMinutesSwitcher from "@APP|Bundles/TimerBundle/Components/TimerMinutesSwitcher.vue"
import TimerSwitcherTesting from "@APP|Bundles/TimerBundle/Services/TimerSwitcherTesting.services"
import { ETimerSwitcherType } from "@APP|Bundles/TimerBundle/Supports/TimerSwitcher.supports"

const TimerSwitcherTestingService = new TimerSwitcherTesting(
	ETimerSwitcherType.MINUTES,
)

describe("[TimerBundle]<Components>(TimerMinutesSwitcher)", () => {
	it("renders correctly component and check below zero value", () => {
		cy.viewport(205, 55)

		cy.mount(TimerMinutesSwitcher, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							timer: {
								disabled: {
									switcher: false,
								},
								switcher: {
									minutes: 0,
								},
							},
						},
						stubActions: false,
					}),
				],
			},
		})

		TimerSwitcherTestingService.checkBelowZeroValue()
	})

	it("renders correctly component and check above fifty-nine value", () => {
		cy.viewport(205, 55)

		cy.mount(TimerMinutesSwitcher, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							timer: {
								disabled: {
									switcher: false,
								},
								switcher: {
									minutes: 59,
								},
							},
						},
						stubActions: false,
					}),
				],
			},
		})

		TimerSwitcherTestingService.checkAboveFiftyNineValue()
	})
})
