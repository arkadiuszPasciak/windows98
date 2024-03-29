import UIText from "@APP|Bundles/UITextBundle/Components/UIText.vue"

describe("[UITextBundle]<Components>(UIText)", async () => {
	it("renders correctly component", () => {
		cy.viewport(300, 77)

		cy.mount(UIText, {
			slots: {
				default: "What do you want the computer to do?",
			},
		})

		cy.get("p.UIText").contains("What do you want the computer to do?")
	})
})
