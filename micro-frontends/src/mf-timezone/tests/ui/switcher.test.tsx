import { expect, test } from "@playwright/experimental-ct-react"
import { TimezoneView } from "../../src/ui/views"

const timezones = [
	{
		value: -12,
		label: "GMT-12 International Date Line West (IDLW)",
	},
	{
		value: -11,
		label: "GMT-11 Nome Time (NT)",
	},
	{
		value: -10,
		label: "GMT-10 Hawaii Standard Time (HST)",
	},
	{
		value: -9,
		label: "GMT-9 Alaska Standard Time (AKST)",
	},
	{
		value: -8,
		label: "GMT-8 Pacific Standard Time (PST)",
	},
	{
		value: -7,
		label: "GMT-7 Mountain Standard Time (MST)",
	},
	{
		value: -6,
		label: "GMT-6 Central Standard Time (CST)",
	},
	{
		value: -5,
		label: "GMT-5 Eastern Standard Time (EST)",
	},
	{
		value: -4,
		label: "GMT-4 Atlantic Standard Time (AST)",
	},
	{
		value: -3,
		label: "GMT-3 Argentina Time (ART)",
	},
	{
		value: -2,
		label: "GMT-2 Azores Time (AT)",
	},
	{
		value: -1,
		label: "GMT-1 West Africa Time (WAT)",
	},
	{
		value: 0,
		label: "GMT+0 Greenwich Mean Time (GMT)",
	},
	{
		value: 1,
		label: "GMT+1 Central European Time (CET)",
	},
	{
		value: 2,
		label: "GMT+2 Eastern European Time (EET)",
	},
	{
		value: 3,
		label: "GMT+3 Moscow Time (MSK)",
	},
	{
		value: 4,
		label: "GMT+4 Armenia Time (AMT)",
	},
	{
		value: 5,
		label: "GMT+5 Pakistan Standard Time (PKT)",
	},
	{
		value: 6,
		label: "GMT+6 Omsk Time (OMSK)",
	},
	{
		value: 7,
		label: "GMT+7 Kranoyask Time (KRAT)",
	},
	{
		value: 8,
		label: "GMT+8 China Standard Time (CST)",
	},
	{
		value: 9,
		label: "GMT+9 Japan Standard Time (JST)",
	},
	{
		value: 10,
		label: "GMT+10 Eastern Australia Standard Time (AEST)",
	},
	{
		value: 11,
		label: "GMT+11 Sakhalin Time (SAKT)",
	},
	{
		value: 12,
		label: "GMT+12 New Zealand Standard Time (NZST)",
	},
]

test.describe("Switcher", () => {
	test("select timezones", async ({ mount }) => {
		const component = await mount(<TimezoneView />)
		const select = await component.getByTestId(
			"ds-select-select-timezone-switcher",
		)

		for (let index = 0; index <= timezones.length - 1; index++) {
			await select.selectOption(timezones[index].label)
			await expect(
				select,
				`User has selected ${timezones[index].label}`,
			).toHaveValue(String(timezones[index].value))
		}
	})
})
