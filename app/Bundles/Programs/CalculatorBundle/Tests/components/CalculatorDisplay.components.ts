import CalculatorDisplayTesting from "@APP|Bundles/CalculatorBundle/Services/CalculatorDisplayTesting.services"

const CalculatorDisplayTestingService = new CalculatorDisplayTesting()

describe("[CalculatorBundle]<Components>(CalculatorDisplay)", () => {
	it("renders component and check value", () => {
		CalculatorDisplayTestingService.testComponent()
	})
})
