import FileSave from '@Bundles/FileBundle/Components/FileSave.vue'
import { FileSaveComponentTesting } from '@Bundles/FileBundle/Services/File.services'
import { method } from 'cypress/types/bluebird'

const methods = new FileSaveComponentTesting()

describe('[FileBundle]<Components>(FileSave)', () => {
  beforeEach(() => {
    cy.viewport(320, 110)

    cy.mount(FileSave, {
      props: {
        modalState: true,
        contentValue: 'This is text to save',
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.FileSave')
  })

  it('should have title', () => {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Save as')
  })

  it('should have labels', () => {
    methods.checkLabels()
  })

  it('saves a text file', () => {
    cy.get('[data-test="ui-input-file-save-name"]').clear().type('cool-name')

    methods.changeSelectAndCheckOptionSelected('Rich text format (*.rtf)')
    methods.changeSelectAndCheckOptionSelected('Text Document (*.txt)')
    methods.changeSelectAndCheckOptionSelected('CSV Document (*.csv)')
    methods.changeSelectAndCheckOptionSelected('Word Document (*.doc)')

    cy.get('[data-test="file-save-button-cancel"]').click()
    cy.get('[data-test="file-save-button-save"]').click()
  })
})
