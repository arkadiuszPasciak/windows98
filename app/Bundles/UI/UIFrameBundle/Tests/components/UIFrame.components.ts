import UIFrame from "@APP|Bundles/UIFrameBundle/Components/UIFrame.vue"

describe("[UIFrameBundle]<Components>(UIFrame)", async () => {
	it("renders correctly component", () => {
		cy.viewport(300, 77)

		cy.mount(UIFrame, {
			props: {
				title: "Date & Time",
			},
			slots: {
				default: '<p class="text-test">here can be content :)</p>',
			},
		})

		cy.get(".UIFrame")

		cy.get(".UIText.title").contains("Date & Time")

		cy.get(".text-test").contains("here can be content :)")
	})
})
