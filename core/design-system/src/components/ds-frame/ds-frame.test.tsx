import { expect, test } from "@playwright/experimental-ct-react"
import { DSFrame, type DSFrameProps } from "./index"

const defaultFrame: DSFrameProps = {
	id: "frame-test",
	title: "Test Frame",
	children: <div data-testid="children-test">Test Content</div>,
}

const noTitleDefaultFrame: DSFrameProps = {
	...defaultFrame,
	title: "",
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSFrame", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(
			<DSFrame
				id={defaultFrame.id}
				title={defaultFrame.title}
			>
				{defaultFrame.children}
			</DSFrame>,
		)

		await expect(component).toBeVisible()

		await expect(component).toHaveAttribute(
			"data-testid",
			`${defaultFrame.id}-frame`,
		)

		const title = component.getByTestId(`${defaultFrame.id}-frame-text`)
		if (defaultFrame.title) await expect(title).toHaveText(defaultFrame.title)

		const children = component.getByTestId("children-test")
		await expect(children).toHaveText("Test Content")
	})

	test("renders properly without title", async ({ mount }) => {
		const component = await mount(
			<DSFrame
				id={noTitleDefaultFrame.id}
				title={noTitleDefaultFrame.title}
			>
				{noTitleDefaultFrame.children}
			</DSFrame>,
		)

		const title = component.getByTestId(`${noTitleDefaultFrame.id}-frame-text`)

		await expect(title).toBeHidden()
	})
})
