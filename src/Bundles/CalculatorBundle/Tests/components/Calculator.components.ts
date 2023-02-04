import Calculator from '@Bundles/CalculatorBundle/Components/Calculator.vue'

describe('[CalculatorBundle]<Components>(Calculator)', () => {
  before(() => {
    cy.mount(Calculator)
  })

  it('should have element and class', () => {
    cy.get('div.Calculator')
  })
})
