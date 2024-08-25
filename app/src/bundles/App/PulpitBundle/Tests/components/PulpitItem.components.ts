import PulpitItem from "@APP|Bundles/PulpitBundle/Components/PulpitItem.vue"

describe("[PulpitBundle]<Components>(PulpitItem)", async () => {
	beforeEach(() => {
		cy.viewport(75, 65)

		cy.mount(PulpitItem, {
			props: {
				name: "My Computer",
				iconName: "mycomputer",
			},
		})
	})

	it("should have element and class", () => {
		cy.get("div.PulpitItem")

		cy.contains("My Computer")
	})
})
