import Run from "@APP|Bundles/RunBundle/Components/Run.vue"
import { createTestingPinia } from "@pinia/testing"

describe("[RunBundle]<Components>(Run)", () => {
	beforeEach(() => {
		cy.viewport(330, 165)

		cy.mount(Run, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							program: { modalRun: true },
						},
						stubActions: false,
					}),
				],
			},
		})
	})

	it("should have title", () => {
		cy.get('[data-test="modal-header-title"]').should("have.text", "Run")
	})

	it("should open calculator", () => {
		cy.get('[data-test="ui-input-run-input"]').clear().type("calculator")

		cy.get('[data-test="run-button-ok"]').click()

		cy.get("div.Run").should("not.exist")
	})

	it("should open notepad", () => {
		cy.get('[data-test="ui-input-run-input"]').clear().type("notepad")

		cy.get('[data-test="run-button-ok"]').click()

		cy.get("div.Run").should("not.exist")
	})

	it("should open run", () => {
		cy.get('[data-test="ui-input-run-input"]').clear().type("run")

		cy.get('[data-test="run-button-ok"]').click()

		cy.get("div.Run").should("not.exist")
	})

	it("should open settings", () => {
		cy.get('[data-test="ui-input-run-input"]').clear().type("settings")

		cy.get('[data-test="run-button-ok"]').click()

		cy.get("div.Run").should("not.exist")
	})

	it("should open shut down", () => {
		cy.get('[data-test="ui-input-run-input"]').clear().type("shut down")

		cy.get('[data-test="run-button-ok"]').click()

		cy.get("div.Run").should("not.exist")
	})

	it("should have elements and classes", () => {
		cy.get("div.Run")

		cy.get('[data-test="run-icon"]')

		cy.get('[data-test="run-description"]').contains(
			"Type of the name of a program and Windows will open it for you",
		)

		cy.get('[data-test="ui-input-label-run-input"]').contains("Open:")
	})
})
