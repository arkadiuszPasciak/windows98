import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import Run from '@Bundles/RunBundle/Components/Run.vue'

const defaultWrapper = mount(Run)

describe('[RunBundle]<Snapshots>(Run)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
