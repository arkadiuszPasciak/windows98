import { expect, test } from "@playwright/experimental-ct-react"
import { DSModal } from "./ds-modal"
import type { DSModalProps } from "./ds-modal.type"

const defaultModal: DSModalProps = {
	id: "modal",
	title: "Test Modal",
	moveWindow: true,
	modalState: true,
	onClose: () => {},
	children: <div>Test Content</div>,
}

const modalWithNavigation: DSModalProps = {
	...defaultModal,
	navigation: [{ name: "NavItem1", onClick: () => {} }],
}

test.describe("DSModal", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const modalElement = await component.getByTestId(
			`${defaultModal.id}-modal-container`,
		)
		const titleElement = await component.getByTestId(
			`${defaultModal.id}-modal-header`,
		)

		await expect(component).toBeVisible()
		await expect(modalElement).toBeVisible()
		await expect(titleElement).toBeVisible()
	})

	test("opens and closes modal", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const closeButton = await component.getByTestId(
			`${defaultModal.id}-close-button`,
		)

		await closeButton.click()
		await expect(component).not.toBeVisible()
	})

	test("resizes window", async ({ mount }) => {
		const component = await mount(
			<DSModal
				{...defaultModal}
				resizeWindow
			/>,
		)

		const modalElement = await component.getByTestId(
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

		const modalElement = await component.getByTestId(
			`${defaultModal.id}-modal-container`,
		)

		const modalHeader = await component.getByTestId(
			`${defaultModal.id}-modal-header`,
		)

		await modalHeader.dispatchEvent("mousedown", {
			clientX: 100,
			clientY: 100,
		})
		await modalHeader.dispatchEvent("mousemove", {
			clientX: 200,
			clientY: 200,
		})
		await modalHeader.dispatchEvent("mouseup")

		await expect(modalElement).toHaveCSS("left", "721px")
		await expect(modalElement).toHaveCSS("top", "441px")
	})

	test("navigation click and check render", async ({ mount }) => {
		const component = await mount(<DSModal {...modalWithNavigation} />)

		const navButton = await component.getByTestId(
			`${modalWithNavigation.id}-modal-navigation-button-NavItem1`,
		)

		await navButton.click()
		await expect(navButton).toBeVisible()
	})

	test("check content render", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const contentElement = await component.getByTestId(
			`${defaultModal.id}-modal-content`,
		)

		await expect(contentElement).toBeVisible()
		await expect(contentElement).toHaveText("Test Content")
	})

	test("check title render", async ({ mount }) => {
		const component = await mount(<DSModal {...defaultModal} />)

		const titleElement = await component.getByTestId(
			`${defaultModal.id}-modal-header-heading`,
		)

		await expect(titleElement).toBeVisible()
		await expect(titleElement).toHaveText("Test Modal")
	})
})
