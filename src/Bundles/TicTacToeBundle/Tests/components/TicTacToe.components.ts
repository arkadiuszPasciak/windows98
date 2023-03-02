import { createTestingPinia } from '@pinia/testing'
import TicTacToe from '@Bundles/TicTacToeBundle/Components/TicTacToe.vue'

describe('[TicTacToeBundle]<Components>(TicTacToe)', () => {
  it('renders correctly component', () => {
    cy.viewport(300, 220)

    cy.mount(TicTacToe, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              program: { modalTicTacToe: true },
            },
            stubActions: false,
          }),
        ],
      },
    })

    cy.get('.TicTacToe')
    cy.get('[data-test="modal-header-title"]').should(
      'have.text',
      'Tic Tac Toe',
    )
  })
})
