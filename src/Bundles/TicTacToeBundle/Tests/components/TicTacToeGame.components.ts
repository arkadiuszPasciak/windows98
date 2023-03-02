import { createTestingPinia } from '@pinia/testing'
import TicTacToeGame from '@Bundles/TicTacToeBundle/Components/TicTacToeGame.vue'
import { TicTacToeGameTesting } from '@Bundles/TicTacToeBundle/Services/TicTacToeGameTesting.services'

const TicTacToeGameTestingService = new TicTacToeGameTesting()

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

    TicTacToeGameTestingService.clickAutomaticallyToEndGame()
  })
})
