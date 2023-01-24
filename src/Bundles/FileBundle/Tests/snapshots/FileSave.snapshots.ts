import { mount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import FileSave from '@Bundles/FileBundle/Components/FileSave.vue'

const defaultWrapper = mount(FileSave, {
  props: {
    modalState: true,
    contentValue: 'This is text to save',
  },
})

describe('[FileBundle]<Snapshots>(FileSave)', () => {
  it('renders correctly component', async () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
