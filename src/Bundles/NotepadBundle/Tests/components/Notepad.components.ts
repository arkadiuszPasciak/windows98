import { createTestingPinia } from '@pinia/testing'
import Notepad from '@Bundles/NotepadBundle/Components/Notepad.vue'
import { FileSaveComponentTesting } from '@Bundles/FileBundle/Services/File.services'

const methods = new FileSaveComponentTesting()

describe('[NotepadBundle]<Components>(Notepad)', () => {
  beforeEach(() => {
    cy.viewport(600, 450)

    cy.mount(Notepad, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalNotepad: true },
            },
            stubActions: false,
          }),
        ],
      },
    })
  })

  it('should have element and class', () => {
    cy.get('div.Notepad')
  })

  it('should have title', () => {
    cy.get('[data-test="modal-header-title"]').should('have.text', 'Notepad')
  })

  it('should write text and save a file', () => {
    cy.get('[data-test="ui-textarea-notepad-textarea"]')
      .clear()
      .type('This is text typing by Cypress :)')

    cy.get('[data-test="notepad-save-file"]').click()

    cy.get('[data-test="ui-input-file-save-name"]').clear().type('cool-name')

    methods.changeSelectAndCheckOptionSelected('CSV Document (*.csv)')

    cy.get('[data-test="file-save-button-save"]').click()
  })

  it('should open save modal and cancel him', () => {
    cy.get('[data-test="notepad-save-file"]').click()

    cy.get('[data-test="file-save-button-cancel"]').click()
  })
})
