import NavigationGrid from "@APP|Bundles/NavigationBundle/Components/NavigationGrid.vue"

describe("[NavigationBundle]<Components>(NavigationGrid)", () => {
	it("renders correctly component", () => {
		cy.viewport(500, 28)

		cy.mount(NavigationGrid, {
			slots: {
				default: "<div class=\"test-navigation\">navigation</div>",
			},
		})

		cy.get("nav.NavigationGrid")

		cy.get("div.test-navigation").contains("navigation")
	})
})
