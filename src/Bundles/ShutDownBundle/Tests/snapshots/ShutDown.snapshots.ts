import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import ShutDown from '@Bundles/ShutDownBundle/Components/ShutDown.vue'

const defaultWrapper = mount(ShutDown, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          program: { modalShutDown: true },
        },
      }),
    ],
  },
})

describe('[StartBundle]<Snapshots>(Start)', () => {
  it('renders correctly component before click button', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
