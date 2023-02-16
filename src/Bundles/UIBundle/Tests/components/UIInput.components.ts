import UIInput from '@Bundles/UIBundle/Components/UIInput.vue'

describe('[UIBundle]<Components>(UIInput)', async () => {
  it('renders correctly component: availableWrapper like as email', () => {
    cy.viewport(130, 35)

    cy.mount(UIInput, {
      props: {
        type: 'email',
        id: 'main-email',
        modelValue: 'test@gmail.com',
        labelName: 'Email',
        labelPosition: 'left',
      },
    })

    cy.get('.UIInput.label-position-left')

    const label = cy.get('[data-test="ui-input-label-main-email"]')

    label.contains('Email')
    label.should('have.attr', 'for', 'main-email')

    const input = cy.get('[data-test="ui-input-main-email"]')

    input.should('have.attr', 'id', 'main-email')
    input.should('have.attr', 'type', 'email')
    input.should('have.value', 'test@gmail.com')
    input.clear().type('elon.musk@gmail.com')
    input.should('have.value', 'elon.musk@gmail.com')
  })

  it('renders correctly component: disabledWrapper like as text', () => {
    cy.viewport(130, 40)

    cy.mount(UIInput, {
      props: {
        type: 'text',
        id: 'first-name',
        modelValue: 'Thomas',
        labelName: 'First name',
        labelPosition: 'top',
        disabled: true,
      },
    })

    cy.get('.UIInput.label-position-top')

    const label = cy.get('[data-test="ui-input-label-first-name"]')

    label.contains('First name')
    label.should('have.attr', 'for', 'first-name')

    const input = cy.get('[data-test="ui-input-first-name"]')

    input.should('have.attr', 'id', 'first-name')
    input.should('have.attr', 'type', 'text')
    input.should('have.attr', 'disabled')
  })

  it('renders correctly component: readonlyWrapper like as password', () => {
    cy.viewport(130, 40)

    cy.mount(UIInput, {
      props: {
        type: 'password',
        id: 'password',
        modelValue: '12345',
        labelName: 'Password',
        labelPosition: 'top',
        readonly: true,
      },
    })

    cy.get('.UIInput.label-position-top')

    const label = cy.get('[data-test="ui-input-label-password"]')

    label.contains('Password')
    label.should('have.attr', 'for', 'password')

    const input = cy.get('[data-test="ui-input-password"]')

    input.should('have.attr', 'id', 'password')
    input.should('have.attr', 'type', 'password')
    input.should('have.attr', 'readonly')
  })

  it('renders correctly component: numberWrapper like as number', () => {
    cy.viewport(50, 21)

    cy.mount(UIInput, {
      props: {
        type: 'number',
        id: 'year-switcher',
        modelValue: '2000',
        min: 1950,
        max: 2000,
      },
    })

    cy.get('.UIInput')

    const input = cy.get('[data-test="ui-input-year-switcher"]')

    input.should('have.attr', 'id', 'year-switcher')
    input.should('have.attr', 'type', 'number')
    input.should('have.attr', 'min', '1950')
    input.should('have.attr', 'max', '2000')
    input.should('have.value', '2000')
    input.clear().type('1991')
    input.should('have.value', '1991')
  })
})
