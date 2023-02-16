import { Nullable } from 'vitest'
import { ITimezoneElements } from '@Bundles/TimezoneBundle/Supports/Timezone.supports'

export function getTimezone(date: Date): Nullable<number> {
  if (!date) {
    return null
  }

  const offset = date.getTimezoneOffset()

  return -offset / 60
}

export class TimezoneComponentTesting {
  public elements: ITimezoneElements

  constructor() {
    this.elements = {
      selectTypeFile: '[data-test="ui-select-timezones"]',
      optionSelected: '[data-test="ui-select-timezones"] > option:selected',
    }
  }

  public changeSelectAndCheckOptionSelected(name: string): void {
    cy.get(this.elements.selectTypeFile).select(name)

    cy.get(this.elements.optionSelected).should('have.text', name)
  }
}
