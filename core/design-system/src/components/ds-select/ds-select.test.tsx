import { expect, test } from "@playwright/experimental-ct-react"
import { DSSelect, type DSSelectProps } from "./index"

const defaultSelect: DSSelectProps = {
	disabled: false,
	id: "language",
	labelName: "Language",
	modelValue: "en",
	options: [
		{
			value: "de",
			name: "Deutsch",
		},
		{
			value: "en",
			name: "English",
		},
		{
			value: "pl",
			name: "Polski",
		},
	],
	required: true,
	onSelect: () => {},
	wrapperLayout: "vertical",
}

const disabledSelect: DSSelectProps = {
	...defaultSelect,
	disabled: true,
}

test.use({ viewport: { width: 500, height: 500 } })

test.describe("DSSelect", () => {
	test("renders properly", async ({ mount }) => {
		const component = await mount(
			<DSSelect
				disabled={defaultSelect.disabled}
				id={defaultSelect.id}
				labelName={defaultSelect.labelName}
				modelValue={defaultSelect.modelValue}
				options={defaultSelect.options}
				required={defaultSelect.required}
				onSelect={defaultSelect.onSelect}
				wrapperLayout={defaultSelect.wrapperLayout}
			/>,
		)

		const label = defaultSelect.labelName
			? component.getByText(defaultSelect.labelName)
			: null
		const select = component.getByTestId(`${defaultSelect.id}-select-select`)

		await expect(component).toBeVisible()

		if (label && defaultSelect.labelName) {
			await expect(label).toHaveAttribute(
				"data-testid",
				`${defaultSelect.id}-select-label`,
			)
			await expect(label).toHaveAttribute("for", `${defaultSelect.id}`)
			await expect(label).toHaveText(defaultSelect.labelName)
		}

		await expect(select).toHaveAttribute(
			"data-testid",
			`${defaultSelect.id}-select-select`,
		)

		await expect(select).toHaveAttribute("id", defaultSelect.id)
		await expect(select).toHaveAttribute("name", defaultSelect.id)
	})

	test("selects an option", async ({ mount }) => {
		const component = await mount(
			<DSSelect
				disabled={defaultSelect.disabled}
				id={defaultSelect.id}
				labelName={defaultSelect.labelName}
				modelValue={defaultSelect.modelValue}
				options={defaultSelect.options}
				required={defaultSelect.required}
				onSelect={defaultSelect.onSelect}
				wrapperLayout={defaultSelect.wrapperLayout}
			/>,
		)

		const select = component.getByTestId(`${defaultSelect.id}-select-select`)

		await select.selectOption("de")
		await expect(select).toHaveValue("de")

		await select.selectOption("en")
		await expect(select).toHaveValue("en")

		await select.selectOption("pl")
		await expect(select).toHaveValue("pl")
	})

	test("does not allow selection when disabled", async ({ mount }) => {
		const component = await mount(
			<DSSelect
				disabled={disabledSelect.disabled}
				id={disabledSelect.id}
				labelName={disabledSelect.labelName}
				modelValue={disabledSelect.modelValue}
				options={disabledSelect.options}
				required={disabledSelect.required}
				onSelect={disabledSelect.onSelect}
				wrapperLayout={defaultSelect.wrapperLayout}
			/>,
		)

		const select = component.getByTestId(`${disabledSelect.id}-select-select`)

		const isDisabled = await select.isDisabled()

		expect(isDisabled).toBe(true)
	})
})
