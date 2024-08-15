import UIStepperTesting from "@APP|Bundles/UIStepperBundle/Components/UIStepperTesting.vue"
import { createTestingPinia } from "@pinia/testing"

describe("[UIStepperBundle]<Components>(UIStepper)", () => {
	it("renders component and test", () => {
		cy.viewport(200, 200)

		cy.mount(UIStepperTesting, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						stubActions: false,
					}),
				],
			},
		})

		cy.get("div.UIStepper")

		cy.get('p[data-test="ui-stepper-testing-input"]').should("have.text", 0)

		cy.get('button[data-test="ui-stepper-testing-increase"]').click()

		cy.get('p[data-test="ui-stepper-testing-input"]').should("have.text", 1)

		cy.get('button[data-test="ui-stepper-testing-increase"]').click()

		cy.get('p[data-test="ui-stepper-testing-input"]').should("have.text", 2)

		cy.get('button[data-test="ui-stepper-testing-decrease"]').click()

		cy.get('p[data-test="ui-stepper-testing-input"]').should("have.text", 1)

		cy.get('button[data-test="ui-stepper-testing-decrease"]').click()

		cy.get('p[data-test="ui-stepper-testing-input"]').should("have.text", 0)
	})
})
