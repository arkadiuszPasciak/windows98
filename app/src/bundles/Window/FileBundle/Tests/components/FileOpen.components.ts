import FileOpen from "@APP|Bundles/FileBundle/Components/FileOpen.vue"

describe("[FileBundle]<Components>(FileOpen)", () => {
	beforeEach(() => {
		cy.viewport(53, 25)

		cy.mount(FileOpen, {
			slots: {
				default:
					'<button class="cypress-button-small" type="button">Open File</button>',
			},
		})
	})

	it("should have element and class", () => {
		cy.get("div.FileOpen")
	})

	it("should open file", () => {
		cy.get('[data-test="file-open-button"]').click()
	})
})
