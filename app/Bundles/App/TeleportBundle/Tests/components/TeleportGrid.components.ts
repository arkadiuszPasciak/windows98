import TeleportGrid from "@APP|Bundles/TeleportBundle/Components/TeleportGrid.vue"

describe("[TeleportBundle]<Components>(TeleportGrid)", async () => {
	it("renders correctly component", () => {
		cy.viewport(100, 100)

		cy.mount(TeleportGrid, {
			slots: {
				default: '<div class="test-teleport">teleport</div>',
			},
		})

		cy.get("div.TeleportGrid")

		cy.get("div.test-teleport").contains("teleport")
	})
})
