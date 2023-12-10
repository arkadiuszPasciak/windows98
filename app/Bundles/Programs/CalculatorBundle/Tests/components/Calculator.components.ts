import CalculatorTesting from '@APP|Bundles/CalculatorBundle/Services/CalculatorTesting.services'

const CalculatorTestingService = new CalculatorTesting()

describe('[CalculatorBundle]<Components>(Calculator)', () => {
  it('renders component check elements and does mathematical operation (58-24.7+908/3*16)', () => {
    CalculatorTestingService.testComponent()

    CalculatorTestingService.calculateMathematicalOperation()
  })
})
