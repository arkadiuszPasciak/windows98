import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import Run from '@Bundles/RunBundle/Components/Run.vue'

const defaultWrapper = mount(Run, {
  global: {
    plugins: [
      createTestingPinia({
        initialState: {
          program: { modalRun: true },
        },
      }),
    ],
  },
})

describe('[RunBundle]<Snapshots>(Run)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
