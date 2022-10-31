import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import UIModal from '@Bundles/UIBundle/Components/UIModal.vue'

const defaultWrapper = mount(UIModal, {
  props: {
    title: 'Close Program',
    width: 500,
    height: 300,
    modalState: true,
  },
})

describe('[UIBundle]<Snapshots>(UIModal)', async () => {
  it('renders correctly component', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
