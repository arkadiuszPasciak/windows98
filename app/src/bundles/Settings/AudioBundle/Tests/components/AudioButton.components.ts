import AudioButton from "@APP|Bundles/AudioBundle/Components/AudioButton.vue"

describe("[AudioBundle]<Components>(AudioButton)", () => {
	it("renders correctly component and turn on/off active class", () => {
		cy.viewport(100, 100)

		cy.mount(AudioButton)

		cy.get("button.AudioButton").should("have.attr", "type", "button")

		cy.get("img.image")
			.should("have.attr", "width", 16)
			.should("have.attr", "height", 16)
			.should("have.attr", "alt", "Button to turn on/off sound")
			.should("have.attr", "src", "/icons/audio-button.png")

		cy.get("button.AudioButton").click()

		cy.get("img.image").should(
			"have.attr",
			"src",
			"/icons/audio-button-off.png",
		)

		cy.get("button.AudioButton").click()

		cy.get("img.image").should("have.attr", "src", "/icons/audio-button.png")
	})
})
