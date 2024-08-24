import UICheckbox from "@APP|Bundles/UICheckboxBundle/Components/UICheckbox.vue"

describe("[UICheckboxBundle]<Components>(UICheckbox)", async () => {
	it("renders correctly component: variant primary, disabled false and checked false", () => {
		cy.viewport(130, 35)

		cy.mount(UICheckbox, {
			props: {
				id: "adult",
				disabled: false,
				checked: false,
			},
			slots: {
				default: "Are you adult?",
			},
		})

		cy.get(".UICheckbox")

		cy.get('[data-test="ui-checkbox-checkmark-adult"] .icon')

		cy.get('[data-test="ui-checkbox-text-adult"]').contains("Are you adult?")

		const input = cy.get('[data-test="ui-checkbox-input-adult"]')

		input.should("have.attr", "type", "checkbox")

		input.should("not.be.checked")
		input.check().should("be.checked")
		input.uncheck().should("not.be.checked")
	})

	it("renders correctly component: variant primary, disabled true and checked true", () => {
		cy.viewport(130, 35)

		cy.mount(UICheckbox, {
			props: {
				id: "country",
				disabled: true,
				checked: true,
			},
			slots: {
				default: "You can't uncheck it :)",
			},
		})

		cy.get(".UICheckbox")

		cy.get('[data-test="ui-checkbox-checkmark-country"] .icon')

		cy.get('[data-test="ui-checkbox-text-country"]').contains(
			"You can't uncheck it :)",
		)

		const input = cy.get('[data-test="ui-checkbox-input-country"]')

		input.should("have.attr", "type", "checkbox")
		input.should("have.attr", "disabled")
	})
})
