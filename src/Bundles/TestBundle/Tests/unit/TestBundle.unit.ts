import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { i18n } from '@Configs/I18n/I18n.config'
import TestBundle from '@Bundles/TestBundle/Components/TestBundle.vue'

test('mount component', async () => {
  expect(TestBundle).toBeTruthy()

  const wrapper = mount(TestBundle, {
    global: {
      plugins: [i18n],
    },
  })

  expect(wrapper.text()).toContain('Hello World!')
})
