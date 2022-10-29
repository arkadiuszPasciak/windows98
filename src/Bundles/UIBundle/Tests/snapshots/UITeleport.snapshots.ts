import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UITeleport from '@Bundles/UIBundle/Components/UITeleport.vue'

const defaultWrapper = mount(UITeleport)

describe('[UIBundle]<Snapshots>(UITeleport)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
