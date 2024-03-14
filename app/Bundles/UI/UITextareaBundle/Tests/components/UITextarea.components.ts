import UITextarea from "@APP|Bundles/UITextareaBundle/Components/UITextarea.vue"

describe("[UITextareaBundle]<Components>(UITextarea)", async () => {
	it("renders correctly component: leftPrimaryWrapper like as comment", () => {
		cy.viewport(180, 40)

		cy.mount(UITextarea, {
			props: {
				id: "comment",
				modelValue: "your comment...",
				labelName: "Comment",
				labelPosition: "left",
			},
		})

		cy.get(".UITextarea.label-position-left")

		const label = cy.get("[data-test=\"ui-textarea-label-comment\"]")

		label.contains("Comment")
		label.should("have.attr", "for", "comment")

		const input = cy.get("[data-test=\"ui-textarea-comment\"]")

		input.should("have.attr", "id", "comment")
		input.should("have.value", "your comment...")
		input.clear().type("It's the best textarea :D!!!")
		input.should("have.value", "It's the best textarea :D!!!")
	})

	it("renders correctly component: topPrimaryWrapper like as feedback", () => {
		cy.viewport(180, 80)

		cy.mount(UITextarea, {
			props: {
				id: "feedback",
				modelValue: "Why is feedback important for change?",
				labelName: "Feedback",
				labelPosition: "top",
			},
		})

		cy.get(".UITextarea.label-position-top")

		const label = cy.get("[data-test=\"ui-textarea-label-feedback\"]")

		label.contains("Feedback")
		label.should("have.attr", "for", "feedback")

		const input = cy.get("[data-test=\"ui-textarea-feedback\"]")

		input.should("have.attr", "id", "feedback")
		input.should("have.value", "Why is feedback important for change?")
		input.clear().type("Feedback has positive impact on changes")
		input.should("have.value", "Feedback has positive impact on changes")
	})

	it("renders correctly component: notepadWrapper like as notepad", () => {
		cy.viewport(180, 80)

		cy.mount(UITextarea, {
			props: {
				id: "notepad",
				type: "notepad",
				modelValue: "This is an Example!",
				labelName: "",
			},
		})

		cy.get(".UITextarea.label-position-top.type-notepad")

		const input = cy.get("[data-test=\"ui-textarea-notepad\"]")

		input.should("have.attr", "id", "notepad")
		input.should("have.value", "This is an Example!")
		input.clear().type("My personal notes")
		input.should("have.value", "My personal notes")
	})
})
