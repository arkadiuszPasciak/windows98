import { expect, test } from "@playwright/experimental-ct-react"
import { DSModal } from "./ds-modal"
import type { DSModalProps } from "./ds-modal.type"

const defaultModal: DSModalProps = {
	id: "modal",
	title: "Test Modal",
	moveWindow: true,
	onClose: () => {},
	children: <div>Test Content</div>,
}

test.use({ viewport: { width: 1000, height: 1000 } })

test.describe("DSModal", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const modalElement = component.getByTestId(
			`${defaultModal.id}-modal-container`,
		)
		const titleElement = component.getByTestId(
			`${defaultModal.id}-modal-header`,
		)

		await expect(component).toBeVisible()
		await expect(modalElement).toBeVisible()
		await expect(titleElement).toBeVisible()
	})

	test("resizes window", async ({ mount }) => {
		const component = await mount(
			<DSModal
				{...defaultModal}
				resizeWindow
			/>,
		)

		const modalElement = component.getByTestId(
			`${defaultModal.id}-modal-container`,
		)

		await modalElement.evaluate((el) => {
			el.style.width = "600px"
			el.style.height = "400px"
		})

		await expect(modalElement).toHaveCSS("width", "600px")
		await expect(modalElement).toHaveCSS("height", "400px")
	})

	test("moves window", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const modalElement = component.getByTestId(
			`${defaultModal.id}-modal-container`,
		)

		const modalHeader = component.getByTestId(`${defaultModal.id}-modal-header`)

		await modalHeader.dispatchEvent("mousedown", {
			clientX: 100,
			clientY: 100,
		})
		await modalHeader.dispatchEvent("mousemove", {
			clientX: 200,
			clientY: 200,
		})
		await modalHeader.dispatchEvent("mouseup")

		await expect(modalElement).toHaveCSS("left", "580px")
		await expect(modalElement).toHaveCSS("top", "580px")
	})

	test("check content render", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const contentElement = component.getByTestId(
			`${defaultModal.id}-modal-content`,
		)

		await expect(contentElement).toBeVisible()
		await expect(contentElement).toHaveText("Test Content")
	})

	test("check title render", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const titleElement = component.getByTestId(
			`${defaultModal.id}-modal-header-heading`,
		)

		await expect(titleElement).toBeVisible()
		await expect(titleElement).toHaveText("Test Modal")
	})
})
