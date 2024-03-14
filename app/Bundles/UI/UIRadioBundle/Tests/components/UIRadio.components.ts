import UIRadio from "@APP|Bundles/UIRadioBundle/Components/UIRadio.vue"

describe("[UIRadioBundle]<Components>(UIRadio)", async () => {
	it("renders correctly component: variant primary, disabled false and checked false", () => {
		cy.viewport(70, 15)

		cy.mount(UIRadio, {
			props: {
				disabled: false,
				checked: false,
				name: "available-radio",
				modelValue: "restart",
			},
			slots: {
				default: "Check Me!",
			},
		})

		cy.get(".UIRadio")

		cy.get("[data-test=\"ui-radio-input-available-radio-restart\"]")
			.should("have.class", "input")
			.should("have.attr", "type", "radio")
			.should("have.attr", "name", "available-radio")
			.should("have.attr", "value", "restart")
			.should("have.prop", "checked", false)
			.should("have.prop", "disabled", false)

		cy.get("label").click()

		cy.get("[data-test=\"ui-radio-input-available-radio-restart\"]").should(
			"have.prop",
			"checked",
			true,
		)

		cy.get("[data-test=\"ui-radio-icon-available-radio-restart\"]").should(
			"have.class",
			"radio",
		)

		cy.get("[data-test=\"ui-radio-label-available-radio-restart\"]")
			.should("have.class", "UIText text")
			.contains("Check Me!")
	})

	it("renders correctly component: variant primary, disabled true and checked true", () => {
		cy.viewport(15, 15)

		cy.mount(UIRadio, {
			props: {
				disabled: true,
				checked: true,
				name: "unavailable-radio",
				modelValue: "shut-down",
			},
		})

		cy.get(".UIRadio.is-disabled")

		cy.get("[data-test=\"ui-radio-input-unavailable-radio-shut-down\"]")
			.should("have.class", "input")
			.should("have.attr", "type", "radio")
			.should("have.attr", "name", "unavailable-radio")
			.should("have.attr", "value", "shut-down")
			.should("have.prop", "checked", true)
			.should("have.prop", "disabled", true)
	})
})
