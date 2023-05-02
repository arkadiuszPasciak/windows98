import { createTestingPinia } from '@pinia/testing'
import TicTacToeGame from '@APP|Bundles/TicTacToeBundle/Components/TicTacToeGame.vue'

describe('[TicTacToeBundle]<Components>(TicTacToeGame)', () => {
  it('renders correctly component', () => {
    cy.viewport(300, 200)

    cy.mount(TicTacToeGame, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: cy.spy,
            initialState: {
              'tic-tac-toe': {
                form: {
                  data: {
                    userName: 'Arkadiusz',
                  },
                  status: false,
                },
              },
            },
            stubActions: false,
          }),
        ],
      },
    })
  })
})
