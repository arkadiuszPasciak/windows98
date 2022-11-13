import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Pulpit from '@Bundles/PulpitBundle/Components/Pulpit.vue'

const defaultWrapper = mount(Pulpit, {
  global: {
    plugins: [createTestingPinia()],
  },
})

describe('[PulpitBundle]<Snapshots>(Pulpit)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
