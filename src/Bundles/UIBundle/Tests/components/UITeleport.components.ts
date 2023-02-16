import UITeleport from '@Bundles/UIBundle/Components/UITeleport.vue'

describe('[UIBundle]<Components>(UITeleport)', async () => {
  it('renders correctly component', () => {
    cy.viewport(100, 100)

    cy.mount(UITeleport, {
      slots: {
        default: '<div class="test-teleport">teleport</div>',
      },
    })

    cy.get('div.UITeleport')

    cy.get('div.test-teleport').contains('teleport')
  })
})
