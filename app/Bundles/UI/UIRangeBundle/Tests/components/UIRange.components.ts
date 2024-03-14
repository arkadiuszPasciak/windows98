import UIRange from "@APP|Bundles/UIRangeBundle/Components/UIRange.vue"

describe("[UIRangeBundle]<Components>(UIRange)", async () => {
	it("renders correctly component horizontal", () => {
		cy.viewport(185, 19)
		cy.mount(UIRange, {
			props: {
				id: "person-age",
				modelValue: 1,
				position: "horizontal",
				labelNameStart: "Low",
				labelNameEnd: "High",
				minValue: 1,
				maxValue: 12,
				stepValue: 3,
			},
		})

		cy.get(".UIRange")

		cy.get("label.label.is-start")
			.should("have.attr", "for", "person-age")
			.contains("Low")

		cy.get("label.label.is-end")
			.should("have.attr", "for", "person-age")
			.contains("High")

		cy.get("input.range")
			.should("have.attr", "id", "person-age")
			.should("have.attr", "type", "range")
			.should("have.attr", "min", "1")
			.should("have.attr", "max", "12")
			.should("have.attr", "step", "3")
	})
})
