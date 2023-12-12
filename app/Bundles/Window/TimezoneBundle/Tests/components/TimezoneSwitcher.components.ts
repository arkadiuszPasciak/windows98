import TimezoneSwitcher from '@APP|Bundles/TimezoneBundle/Components/TimezoneSwitcher.vue'
import { TimezoneComponentTesting } from '@APP|Bundles/TimezoneBundle/Services/Timezone.services'

const methods = new TimezoneComponentTesting()

describe('[TimezoneBundle]<Snapshots>(TimezoneSwitcher)', async () => {
  beforeEach(() => {
    cy.viewport(380, 85)

    cy.mount(TimezoneSwitcher)
  })

  it('should have element, class and title', () => {
    cy.get('div.UIFrame.TimezoneSwitcher')

    cy.get('[data-test="frame-title-timezone"]').should('have.text', 'Timezone')
  })

  it('should select timezones', () => {
    methods.changeSelectAndCheckOptionSelected(
      'GMT-12 International Date Line West (IDLW)',
    )

    methods.changeSelectAndCheckOptionSelected('GMT-11 Nome Time (NT)')

    methods.changeSelectAndCheckOptionSelected(
      'GMT-10 Hawaii Standard Time (HST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT-9 Alaska Standard Time (AKST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT-8 Pacific Standard Time (PST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT-7 Mountain Standard Time (MST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT-6 Central Standard Time (CST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT-5 Eastern Standard Time (EST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT-4 Atlantic Standard Time (AST)',
    )

    methods.changeSelectAndCheckOptionSelected('GMT-3 Argentina Time (ART)')

    methods.changeSelectAndCheckOptionSelected('GMT-2 Azores Time (AT)')

    methods.changeSelectAndCheckOptionSelected('GMT-1 West Africa Time (WAT)')

    methods.changeSelectAndCheckOptionSelected(
      'GMT+0 Greenwich Mean Time (GMT)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT+1 Central European Time (CET)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT+2 Eastern European Time (EET)',
    )

    methods.changeSelectAndCheckOptionSelected('GMT+3 Moscow Time (MSK)')

    methods.changeSelectAndCheckOptionSelected('GMT+4 Armenia Time (AMT)')

    methods.changeSelectAndCheckOptionSelected(
      'GMT+5 Pakistan Standard Time (PKT)',
    )

    methods.changeSelectAndCheckOptionSelected('GMT+6 Omsk Time (OMSK)')

    methods.changeSelectAndCheckOptionSelected('GMT+7 Kranoyask Time (KRAT)')

    methods.changeSelectAndCheckOptionSelected(
      'GMT+8 China Standard Time (CST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT+9 Japan Standard Time (JST)',
    )

    methods.changeSelectAndCheckOptionSelected(
      'GMT+10 Eastern Australia Standard Time (AEST)',
    )

    methods.changeSelectAndCheckOptionSelected('GMT+11 Sakhalin Time (SAKT)')

    methods.changeSelectAndCheckOptionSelected(
      'GMT+12 New Zealand Standard Time (NZST)',
    )
  })
})
