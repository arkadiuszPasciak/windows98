import CalculatorKeyboardTesting from '@APP|Bundles/CalculatorBundle/Services/CalculatorKeyboardTesting.services'

const CalculatorKeyboardTestingService = new CalculatorKeyboardTesting()

describe('[CalculatorBundle]<Components>(CalculatorKeyboard)', () => {
  it('renders component and check buttons', () => {
    CalculatorKeyboardTestingService.testComponent()
  })
})
