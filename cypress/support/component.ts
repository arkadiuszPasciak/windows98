import { mount } from 'cypress/vue'
import '@Assets/Styles/General/Base.styles.scss'
import './commands'

Cypress.Commands.add('mount', mount)
