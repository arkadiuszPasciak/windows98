import { createTestingPinia } from '@pinia/testing'
import Calculator from '@APP|Bundles/CalculatorBundle/Components/Calculator.vue'

describe('[CalculatorBundle]<Components>(Calculator)', () => {
  beforeEach(() => {
    cy.viewport(190, 220)

    cy.mount(Calculator, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalCalculator: true },
            },
            stubActions: false,
          }),
        ],
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.Calculator')
  })

  it('should have title', () => {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Calculator')
  })

  it('does mathematical operation 58-24.7+908/3*16', () => {
    cy.get('[data-test="calculator-button-5"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '5')

    cy.get('[data-test="calculator-button-8"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58')

    cy.get('[data-test="calculator-button--"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-')

    cy.get('[data-test="calculator-button-2"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-2')

    cy.get('[data-test="calculator-button-4"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-24')

    cy.get('[data-test="calculator-button-."]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-24.')

    cy.get('[data-test="calculator-button-7"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-24.7')

    cy.get('[data-test="calculator-button-+"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-24.7+')

    cy.get('[data-test="calculator-button-9"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-24.7+9')

    cy.get('[data-test="calculator-button-0"]').click()

    cy.get('[data-test="calculator-display"]').should('have.text', '58-24.7+90')

    cy.get('[data-test="calculator-button-8"]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '58-24.7+908',
    )

    cy.get('[data-test="calculator-button-/"]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '58-24.7+908/',
    )

    cy.get('[data-test="calculator-button-3"]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '58-24.7+908/3',
    )

    cy.get('[data-test="calculator-button-*"]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '58-24.7+908/3*',
    )

    cy.get('[data-test="calculator-button-1"]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '58-24.7+908/3*1',
    )

    cy.get('[data-test="calculator-button-6"]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '58-24.7+908/3*16',
    )

    cy.get('[data-test="calculator-button-="]').click()

    cy.get('[data-test="calculator-display"]').should(
      'have.text',
      '4875.966666666667',
    )
  })
})
