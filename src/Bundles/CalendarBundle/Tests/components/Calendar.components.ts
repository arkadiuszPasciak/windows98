import { createTestingPinia } from '@pinia/testing'
import CalendarSettings from '@Bundles/CalendarBundle/Components/CalendarSettings.vue'

describe('[CalendarBundle]<Components>(Calendar)', async () => {
  beforeEach(() => {
    cy.viewport(200, 240)

    cy.mount(CalendarSettings, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            stubActions: false,
          }),
        ],
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.CalendarSettings')
  })

  it('should have title', () => {
    cy.get('[data-test="frame-title-calendar"]').should('have.text', 'Calendar')
  })

  it('selects months', () => {
    cy.get('select').select('January')

    cy.get('select > option:selected').should('have.text', 'January')

    cy.get('select').select('February')

    cy.get('select > option:selected').should('have.text', 'February')

    cy.get('select').select('March')

    cy.get('select > option:selected').should('have.text', 'March')

    cy.get('select').select('April')

    cy.get('select > option:selected').should('have.text', 'April')

    cy.get('select').select('May')

    cy.get('select > option:selected').should('have.text', 'May')

    cy.get('select').select('June')

    cy.get('select > option:selected').should('have.text', 'June')

    cy.get('select').select('July')

    cy.get('select > option:selected').should('have.text', 'July')

    cy.get('select').select('August')

    cy.get('select > option:selected').should('have.text', 'August')

    cy.get('select').select('September')

    cy.get('select > option:selected').should('have.text', 'September')

    cy.get('select').select('October')

    cy.get('select > option:selected').should('have.text', 'October')

    cy.get('select').select('November')

    cy.get('select > option:selected').should('have.text', 'November')

    cy.get('select').select('December')

    cy.get('select > option:selected').should('have.text', 'December')
  })
})
